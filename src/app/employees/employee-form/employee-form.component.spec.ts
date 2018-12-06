import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormComponent } from './employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';

let userServiceStub: Partial<EmployeesService>;

userServiceStub = {
  getEmployee(id: number) { return of({id: 0, fullname: '', todo: 0, inprocess: 0, done: 0}); },
};


describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFormComponent ,
      ],
      imports: [
        ReactiveFormsModule,
      ],
      providers: [
        {provide: EmployeesService, useValue: userServiceStub },
        {provide: Location, useValue: () => {} },
        {provide: ActivatedRoute, useValue: { snapshot: { paramMap: { id: 123 , get: () => { } } } } },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
