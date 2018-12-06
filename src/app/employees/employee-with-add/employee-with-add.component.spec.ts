import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWithAddComponent } from './employee-with-add.component';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('EmployeeWithAddComponent', () => {
  let component: EmployeeWithAddComponent;
  let fixture: ComponentFixture<EmployeeWithAddComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeWithAddComponent ,
        EmployeeListComponent],
      imports: [SharedModule,
        HttpClientModule,
        RouterTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeWithAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
