import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardJumbotronComponent } from './jumbotron/jumbotron.component';
import { TopEmployeesComponent } from './topEmployees/topEmployees.component';
import { DashboardJumbotronTodoComponent } from './jumbotron/todo/todo.component';
import { DashboardJumbotronInprocessComponent } from './jumbotron/inprocess/inprocess.component';
import { DashboardJumbotronDoneComponent } from './jumbotron/done/done.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardJumbotronComponent,
    TopEmployeesComponent,
    DashboardJumbotronTodoComponent,
    DashboardJumbotronInprocessComponent,
    DashboardJumbotronDoneComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
