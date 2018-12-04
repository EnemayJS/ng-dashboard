import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJumbotronTodoComponent } from './todo.component';

describe('DashboardJumbotronTodoComponent', () => {
  let component: DashboardJumbotronTodoComponent;
  let fixture: ComponentFixture<DashboardJumbotronTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardJumbotronTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardJumbotronTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
