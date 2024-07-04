import { SmartEntityDefinition } from '@smart/smart-ngrx';

import { DepartmentChild } from '../../../../shared/department-children/department-child.interface';
import { departmentChildEffectsServiceToken } from '../../../../shared/department-children/department-child-effects.service-token';

export const noDirtyDepartmentChildrenDefinition: SmartEntityDefinition<DepartmentChild> =
  {
    entityName: 'departmentChildren',
    effectServiceToken: departmentChildEffectsServiceToken,
    markAndDelete: {
      markDirtyTime: -1,
    },
    defaultRow: (id) => ({
      id,
      name: '',
      children: [],
    }),
  };
