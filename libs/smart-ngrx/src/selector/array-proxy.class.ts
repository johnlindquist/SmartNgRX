import { EntityAdapter, EntityState } from '@ngrx/entity';

import { ActionService } from '../actions/action.service';
import { assert } from '../common/assert.function';
import { castTo } from '../common/cast-to.function';
import { isProxy } from '../common/is-proxy.const';
import { actionServiceRegistry } from '../registrations/action.service.registry';
import { entityDefinitionCache } from '../registrations/entity-definition-cache.function';
import { CustomProxy } from '../row-proxy/custom-proxy.class';
import { ChildDefinition } from '../types/child-definition.interface';
import { SmartNgRXRowBase } from '../types/smart-ngrx-row-base.interface';
import { arrayProxyClassGet } from './array-proxy-class.get.function';
import { getArrayItem } from './get-array-item.function';
import { isArrayProxy } from './is-array-proxy.function';

/**
 * This is an internal class used by `createSmartSelector` to wrap the field
 * that represents the child array with a class that manages all the
 * magic of loading the data from the server as it is accessed.
 *
 * @see `createSmartSelector`
 */
export class ArrayProxy<P extends object, C extends SmartNgRXRowBase>
  implements ArrayLike<C>
{
  entityAdapter: EntityAdapter<C>;
  [isProxy] = true;
  rawArray: string[] = [];
  childActionService: ActionService<C>;

  /**
   * The constructor for the ArrayProxy class.
   *
   * @param childArray The array of ids to wrap
   * @param child The child entity we use to find the item in the store
   * @param childDefinition The definition of the child that allows us
   *     to get at features, entities and other things we need.
   */
  constructor(
    private childArray: ArrayProxy<P, C> | string[],
    private child: EntityState<C>,
    private childDefinition: ChildDefinition<P>,
  ) {
    const { childFeature, childEntity } = this.childDefinition;
    this.childActionService = castTo<ActionService<C>>(
      actionServiceRegistry(childFeature, childEntity),
    );
    // needed primarily for adding items to the array
    const entityAdapter = entityDefinitionCache(
      childFeature,
      childEntity,
    ).entityAdapter;
    assert(
      !!entityAdapter,
      `Entity adapter for feature: ${childFeature} and entity: ${childEntity} not found.`,
    );
    this.entityAdapter = castTo<EntityAdapter<C>>(entityAdapter);
    // proxying this so that we can intercept going after
    // an index and return the item from the store instead
    return new Proxy(this, {
      get: (target, prop) => arrayProxyClassGet(target, prop),
    });
  }

  /**
   * This initialized the class once it has been created. We do this
   * so that we can test the class without having to worry about
   * executable code in the constructor.
   */
  init(): void {
    if (isArrayProxy<P, C>(this.childArray)) {
      this.childArray = castTo<ArrayProxy<P, C>>(this.childArray).rawArray;
    }
    // at this point, we can be sure that childArray is a string[]
    if (Object.isFrozen(this.childArray)) {
      // unfreeze the original array so we can proxy it.
      this.childArray = [...this.childArray];
    }

    this.rawArray = this.childArray;
    this.childArray = [];
    this.length = this.rawArray.length;
  }

  /**
   * This primarily exist for testing so you can stringify the array and then
   * parse it so that you get an array you can compare against instead of an
   * object of type ArrayProxy that you can't do much with.
   *
   * @returns what this would return if it were a real array.  Mostly for
   * unit testing.
   */
  toJSON(): C[] {
    const array: C[] = [];
    for (let i = 0; i < this.length; i++) {
      array.push(this.getAtIndex(i));
    }
    return array;
  }

  [n: number]: C;
  length = 0;

  /**
   * Allows us to go after the data in the store based on the index of the
   * array.
   *
   * @param index the index into the rawArray that has the ID we will
   * lookup in the entity.
   * @returns the item from the store or the default row if it is not in the
   * store yet.
   */
  getAtIndex(index: number): C {
    if (index >= 0 && index < this.rawArray.length) {
      const id = this.rawArray[index];
      return getArrayItem<C, P>(this.child, id, this.childDefinition);
    }
    throw new Error('Index out of bounds');
  }

  /**
   * grabs common actions and store used by other methods
   *
   * @returns actions, parentActions, and store
   */
  getServices(): {
    service: ActionService<SmartNgRXRowBase>;
    parentService: ActionService<SmartNgRXRowBase>;
  } {
    const { childFeature, childEntity, parentFeature, parentEntity } =
      this.childDefinition;
    const service = actionServiceRegistry(childFeature, childEntity);
    const parentService = actionServiceRegistry(parentFeature, parentEntity);
    return { service, parentService };
  }

  /**
   * This method allows us to add an item to the array. Make sure it contains
   * and ID field and any other defaults you might need
   *
   * @param newRow the item to add to the array
   * @param thisRow the parent entity (this row) that contains the array
   */
  addToStore(newRow: C, thisRow: P): void {
    const { parentFeature, parentEntity } = this.childDefinition;
    const childId = this.entityAdapter.selectId(newRow) as string;
    const adapter = entityDefinitionCache(
      parentFeature,
      parentEntity,
    ).entityAdapter;
    assert(
      !!adapter,
      `Entity adapter for feature: ${parentFeature} and entity: ${parentEntity} not found.`,
    );
    const parentId = adapter.selectId(thisRow) as string;
    const { service, parentService } = this.getServices();
    const newParent = this.createNewParentFromParent(thisRow, true);
    newRow.parentId = parentId;
    newRow.isEditing = true;
    service.loadByIdsSuccess([newRow]);
    castTo<Record<keyof P, string[]>>(newParent)[
      this.childDefinition.parentField
    ] = [...this.rawArray, childId];
    parentService.loadByIdsSuccess([newParent]);
  }

  /**
   * This removes a row from the store that was previously added, but not
   * saved to the server yet.
   *
   * @param row the row to remove from the array
   * @param parent the parent entity that contains the array
   */
  removeFromStore(row: C, parent: P): void {
    const childId = this.entityAdapter.selectId(row) as string;
    const { parentService } = this.getServices();
    const newParent = this.createNewParentFromParent(parent, false);
    castTo<Record<keyof P, string[]>>(newParent)[
      this.childDefinition.parentField
    ] = this.rawArray.filter((cid) => cid !== childId);
    this.childActionService.remove([childId]);
    parentService.loadByIdsSuccess([newParent]);
  }

  /**
   * @ignore
   */
  private createNewParentFromParent(parent: P, isEditing: boolean): P {
    let newParent: P = { ...parent, isEditing };
    // we aren't using the 2nd generic parameter of CustomProxy, so we just
    // use the base type of SmartNgRXRowBase here.
    const customProxy = castTo<CustomProxy<P, SmartNgRXRowBase>>(parent);
    if (customProxy.getRealRow !== undefined) {
      newParent = {
        ...customProxy.getRealRow(),
        ...customProxy.changes,
        isEditing,
      };
    }
    return newParent;
  }
}
