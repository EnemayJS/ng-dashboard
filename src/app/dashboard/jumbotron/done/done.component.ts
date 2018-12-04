import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-jumbotron-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DashboardJumbotronDoneComponent implements OnInit {
  @Input() doneQuantity: number;
  constructor() { }

  ngOnInit() {
  }

}
