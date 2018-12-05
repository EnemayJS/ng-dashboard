import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeJobs } from './interfaces/employeeJobs';

const employees = [
  {id: 1, fullname: 'John Doe', todo: 11, inprocess: 10, done: 15},
  {id: 2, fullname: 'Kitty Black', todo: 10, inprocess: 13, done: 5},
  {id: 3, fullname: 'Mike Brown', todo: 2, inprocess: 8, done: 1},
  {id: 4, fullname: 'Anthony Star', todo: 14, inprocess: 1, done: 8},
];

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployeeJobsList(): Observable<EmployeeJobs[]> {
    return of(employees);
  }
}
