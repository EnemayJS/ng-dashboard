import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { TopEmployee } from '../interfaces/topEmployee';

@Component({
  selector: 'app-dashboard-topemployees',
  templateUrl: './topEmployees.component.html',
  styleUrls: ['./topEmployees.component.css']
})
export class TopEmployeesComponent implements OnInit {
  employees: TopEmployee[];
  imagePath = '/assets/img_avatar.png';
  constructor(private sevice: DashboardService) { }

  ngOnInit() {
    this.getTopEmployeeList();
  }

  getTopEmployeeList(): void {
    this.sevice.getTopEmployeeList().subscribe(data => this.employees = data);
  }
}
