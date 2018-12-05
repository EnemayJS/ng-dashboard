import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEmployeesComponent } from './topEmployees.component';

describe('DashboardJoblistComponent', () => {
  let component: TopEmployeesComponent;
  let fixture: ComponentFixture<TopEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
