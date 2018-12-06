import { TestBed } from '@angular/core/testing';

import { EmployeesService } from './employees.service';
import { HttpClientModule } from '@angular/common/http';

describe('EmployeesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [

      ]
  }));

  it('should be created', () => {
    const service: EmployeesService = TestBed.get(EmployeesService);
    expect(service).toBeTruthy();
  });

  it('should return employees', () => {
    const service: EmployeesService = TestBed.get(EmployeesService);
    expect(service.getEmployeeJobsList()).toBeTruthy();
  });
});
