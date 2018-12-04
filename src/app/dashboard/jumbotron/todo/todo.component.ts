import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-jumbotron-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class DashboardJumbotronTodoComponent implements OnInit {
  @Input() todoQuantity: number;
  constructor() { }

  ngOnInit() {
  }

}
