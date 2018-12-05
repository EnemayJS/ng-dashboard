import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-with-add',
  templateUrl: './employee-with-add.component.html',
  styleUrls: ['./employee-with-add.component.css']
})
export class EmployeeWithAddComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAddButtonClicked() {
    this.router.navigate(['/employees/new']);
  }
}
