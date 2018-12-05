import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
