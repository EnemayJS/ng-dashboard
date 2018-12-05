import { Component, OnInit } from '@angular/core';
import { EmployeeJobs } from '../../employees/interfaces/employeeJobs';
import { EmployeesService } from '../../employees/employees.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeJobs[];
  constructor(private sevice: EmployeesService) { }

  ngOnInit() {
    this.getEmployeeJobsList();
  }

  getEmployeeJobsList(): void {
    this.sevice.getEmployeeJobsList().subscribe(data => this.employees = data);
  }

}
