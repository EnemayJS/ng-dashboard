import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
   loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'employees',
    loadChildren: './employees/employees.module#EmployeeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
