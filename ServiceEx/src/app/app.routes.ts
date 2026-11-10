import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee.component';
import { EmployeeComponent } from './component/employee.component';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'add-employee',
    pathMatch: 'full'
  },

  {
    path: 'add-employee',
    component: AddEmployeeComponent
  },

  {
    path: 'employee',
    component: EmployeeComponent
  }

];
