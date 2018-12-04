import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';
import { EmployeeJobs } from '../interfaces/employeeJobs';

@Component({
  selector: 'app-dashboard-joblist',
  templateUrl: './joblist.component.html',
  styleUrls: ['./joblist.component.css']
})
export class DashboardJoblistComponent implements OnInit {
  employees: EmployeeJobs[];
  constructor(private sevice: DashboardService) { }

  ngOnInit() {
    this.getEmployeeJobsList();
  }

  getEmployeeJobsList(): void {
    this.sevice.getEmployeeJobsList().subscribe(data => this.employees = data);
  }
}
