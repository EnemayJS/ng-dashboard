import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJumbotronComponent } from './jumbotron.component';
import { DashboardJumbotronTodoComponent } from './todo/todo.component';
import { DashboardJumbotronInprocessComponent } from './inprocess/inprocess.component';
import { DashboardJumbotronDoneComponent } from './done/done.component';

describe('DashboardJumbotronComponent', () => {
  let component: DashboardJumbotronComponent;
  let fixture: ComponentFixture<DashboardJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardJumbotronComponent,
        DashboardJumbotronTodoComponent,
        DashboardJumbotronInprocessComponent,
        DashboardJumbotronDoneComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
