import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJumbotronComponent } from './jumbotron/jumbotron.component';
import { TopEmployeesComponent } from './topEmployees/topEmployees.component';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { DashboardJumbotronTodoComponent } from './jumbotron/todo/todo.component';
import { DashboardJumbotronInprocessComponent } from './jumbotron/inprocess/inprocess.component';
import { DashboardJumbotronDoneComponent } from './jumbotron/done/done.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ,
        DashboardJumbotronComponent,
        TopEmployeesComponent,
        DashboardJumbotronTodoComponent,
        DashboardJumbotronInprocessComponent,
        DashboardJumbotronDoneComponent
      ],
      imports: [CommonModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
