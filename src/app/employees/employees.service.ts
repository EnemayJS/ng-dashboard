import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeJobs } from './interfaces/employeeJobs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employeesUrl = 'api/employees';
  constructor(private http: HttpClient) { }

  getEmployeeJobsList(): Observable<EmployeeJobs[]> {
    return this.http.get<EmployeeJobs[]>(this.employeesUrl)
    .pipe(
      tap(_ => console.log('fetch employees')),
      catchError(this.handleError('get employees', []))
    );
  }

  addEmployee (employee: EmployeeJobs): Observable<EmployeeJobs> {
    return this.http.post<EmployeeJobs>(this.employeesUrl, employee, httpOptions).pipe(
      catchError(this.handleError<EmployeeJobs>('addEmployeeJobs'))
    );
  }

  getEmployee(id: number): Observable<EmployeeJobs> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<EmployeeJobs>(url).pipe(
      catchError(this.handleError<EmployeeJobs>(`getemployee id=${id}`))
    );
  }

  updateEmployee(employee: EmployeeJobs): Observable<any> {
    return this.http.put(this.employeesUrl, employee, httpOptions).pipe(
      catchError(this.handleError<any>('update Employee'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
