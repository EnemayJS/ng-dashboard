import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-jumbotron-inprocess',
  templateUrl: './inprocess.component.html',
  styleUrls: ['./inprocess.component.css']
})
export class DashboardJumbotronInprocessComponent implements OnInit {
  @Input() inprocessQuantity: number;
  constructor() { }

  ngOnInit() {
  }

}
