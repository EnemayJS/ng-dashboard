import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee = new FormGroup({
    fullName: new FormControl(''),
    todo: new FormControl(),
    inProcess: new FormControl(),
    done: new FormControl()
  });

  constructor(private service: EmployeesService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.employee.value);
  }
}
