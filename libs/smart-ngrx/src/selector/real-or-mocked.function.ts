import { EntityState } from '@ngrx/entity';

import { actionServiceRegistry } from '../registrations/action.service.registry';
import { rowProxy } from '../row-proxy/row-proxy.function';
import { RowProxyDelete } from '../row-proxy/row-proxy-delete.interface';
import { ChildDefinition } from '../types/child-definition.interface';
import { SmartNgRXRowBase } from '../types/smart-ngrx-row-base.interface';

/**
 * Internal function used by `createInnerSmartSelector` use to load the data if
 * it doesn't exist in the store and return a placeholder row if it doesn't
 *
 * @param entityState the `EntityState` used to lookup the id
 * @param id the id to lookup
 * @param defaultObject the default object to return if the id doesn't exist
 * @param childDefinition the `ChildDefinition` of the child object that
 * lets us retrieve the feature and entity names
 * @returns the row from the store or the default object
 *
 * @see `createInnerSmartSelector`
 */
export function realOrMocked<
  T extends SmartNgRXRowBase,
  P extends SmartNgRXRowBase,
>(
  entityState: EntityState<T>,
  id: string,
  defaultObject: T,
  childDefinition: ChildDefinition<P, T>,
): RowProxyDelete & T {
  const { childFeature, childEntity, parentFeature, parentEntity } =
    childDefinition;
  const service = actionServiceRegistry(childFeature, childEntity);
  const parentService = actionServiceRegistry(parentFeature, parentEntity);

  const record = entityState.entities;
  let row = record[id];
  if (row === undefined) {
    row = { ...defaultObject, id, isLoading: true };
  }
  return rowProxy<T>(row, service, parentService);
}
