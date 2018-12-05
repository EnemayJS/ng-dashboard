import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OverallData } from './interfaces/overalldata';
import { TopEmployee } from './interfaces/topEmployee';

const overallData = {todo: 31, inprocess: 25, done: 40};
const employees = [
  {id: 1, fullname: 'John Doe', done: 15},
  {id: 4, fullname: 'Anthony Star', done: 8},
  {id: 2, fullname: 'Kitty Black', done: 5},
  {id: 3, fullname: 'Mike Brown', done: 1},
];

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() { }

  getOverallData(): Observable<OverallData> {
    return of(overallData);
  }

  getTopEmployeeList(): Observable<TopEmployee[]> {
    return of(employees);
  }
}
