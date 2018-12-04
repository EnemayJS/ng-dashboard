import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OverallData } from './dashboard/interfaces/overalldata';
import { EmployeeJobs } from './dashboard/interfaces/employeeJobs';

const overallData = {todo: 31, inprocess: 25, done: 40};
const employees = [
  {id: 1, fullname: 'John Doe', todo: 11, inprocess: 10, done: 15},
  {id: 2, fullname: 'Kitty Black', todo: 10, inprocess: 13, done: 5},
  {id: 3, fullname: 'Mike Brown', todo: 2, inprocess: 8, done: 1},
  {id: 4, fullname: 'Anthony Star', todo: 14, inprocess: 1, done: 8},
];

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() { }

  getOverallData(): Observable<OverallData> {
    return of(overallData);
  }

  getEmployeeJobsList(): Observable<EmployeeJobs[]> {
    return of(employees);
  }
}
