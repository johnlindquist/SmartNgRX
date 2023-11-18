import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { castTo } from '@smart/smart-ngrx/common/cast-to.function';
import { provideSmartFeatureEntities } from '@smart/smart-ngrx/functions/provide-smart-feature-entities.function';
import { StoreEffects } from '@smart/smart-ngrx/selector/store.effects';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { currentLocationReducer } from './current-location/current-location.reducer';
import { SharedState } from './shared-state.interface';
import { DepartmentEffectsService } from './store/department/department-effects.service';
import { departmentEffectsServiceToken } from './store/department/department-effects.service-token';
import { departmentsDefinition } from './store/department/departments-definition';
import { DepartmentChildEffectsService } from './store/department-children/department-child-effects.service';
import { departmentChildEffectsServiceToken } from './store/department-children/department-child-effects.service-token';
import { departmentChildrenDefinition } from './store/department-children/department-children-definition';
import { DocsService } from './store/docs/docs.service';
import { FoldersService } from './store/folders/folders.service';
import { ListsService } from './store/lists/lists.service';
import { LocationEffectsService } from './store/locations/location-effects.service';
import { locationEffectsServiceToken } from './store/locations/location-effects.service-token';
import { locationsDefinition } from './store/locations/locations-definition';
import { SprintFoldersService } from './store/sprint-folders/sprint-folders.service';

// This ensure we have one key per SharedState property
const sharedReducers = castTo<ActionReducerMap<SharedState>>({
  currentLocation: currentLocationReducer,
});

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ScrollingModule,
  ],
  providers: [
    DocsService,
    FoldersService,
    SprintFoldersService,
    ListsService,
    {
      provide: departmentEffectsServiceToken,
      useClass: DepartmentEffectsService,
    },
    {
      provide: departmentChildEffectsServiceToken,
      useClass: DepartmentChildEffectsService,
    },
    {
      provide: locationEffectsServiceToken,
      useClass: LocationEffectsService,
    },
    importProvidersFrom([
      StoreModule.forFeature('shared2', sharedReducers),
      EffectsModule.forFeature([
        // StoreEffects is temporary
        StoreEffects,
      ]),
    ]),
    provideSmartFeatureEntities('shared', [
      locationsDefinition,
      departmentsDefinition,
      departmentChildrenDefinition,
    ]),
  ],
  exports: [SidebarComponent],
})
export class SharedModule {}
