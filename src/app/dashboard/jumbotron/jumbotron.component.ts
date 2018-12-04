import { Component, OnInit } from '@angular/core';
import { OverallData } from '../interfaces/overalldata';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class DashboardJumbotronComponent implements OnInit {
  overalData: OverallData;
  constructor(private service: DashboardService) {
  }

  ngOnInit() {
    this.getData();
  }
  getData(): void {
    this.service.getOverallData().subscribe(data => this.overalData = data);
  }
}
