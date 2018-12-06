import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmployeeListComponent } from './employee-list.component';
import { EmployeesService } from '../employees.service';
import { of } from 'rxjs';

let userServiceStub: Partial<EmployeesService>;

userServiceStub = {
  getEmployeeJobsList() { return of([{id: 0, fullname: '', todo: 0, inprocess: 0, done: 0}]); },
};

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: EmployeesService, useValue: userServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
