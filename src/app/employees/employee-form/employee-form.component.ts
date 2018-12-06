import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { EmployeeJobs } from '../interfaces/employeeJobs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: EmployeeJobs;
  title: string;
  formEmployee = new FormGroup({
    fullName: new FormControl(''),
    todo: new FormControl(),
    inProcess: new FormControl(),
    done: new FormControl(),
    id: new FormControl()
  });

  constructor(
    private service: EmployeesService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getEmployee();
  }

  onSubmit() {
    console.warn(this.formEmployee.value);
    this.service.addEmployee(this.formEmployee.value);
  }

  getEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
    this.title = 'Edit Employee';
    this.service.getEmployee(+id).subscribe(
      employee => this.setForm(employee)
    );
    } else {
      this.title = 'New Employee';
    }
  }

  setForm(employee: EmployeeJobs) {
    this.formEmployee = new FormGroup({
      fullName: new FormControl(employee ? employee.fullname : ''),
      todo: new FormControl(employee ? employee.todo : ''),
      inProcess: new FormControl(employee ? employee.inprocess : ''),
      done: new FormControl(employee ? employee.done : ''),
      id: new FormControl(employee ? employee.id : '')
    });
  }
}
