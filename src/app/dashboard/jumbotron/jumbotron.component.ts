import { Component, OnInit } from '@angular/core';
import { OverallData } from '../interfaces/overalldata';

@Component({
  selector: 'app-dashboard-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class DashboardJumbotronComponent implements OnInit {
  overalData: OverallData;
  constructor() {
    this.overalData = {todo: 30, inprocess: 25, done: 40};
  }

  ngOnInit() {
  }

}
