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
    private location: Location
    ) { }

  ngOnInit() {
    this.getEmployee();
  }

  onSubmit() {
    console.warn(this.formEmployee.value);
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.updateEmployee(this.formEmployee.value);
    } else {
      this.service.addEmployee(this.formEmployee.value);
    }
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
    this.formEmployee.patchValue({
      fullName: employee ? employee.fullname : '',
      todo: employee ? employee.todo : '',
      inProcess: employee ? employee.inprocess : '',
      done: employee ? employee.done : '',
      id: employee ? employee.id : ''
    });
  }

  back(): void {
    this.location.back();
  }
}
