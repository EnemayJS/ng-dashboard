import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWithAddComponent } from './employee-with-add.component';

describe('EmployeeWithAddComponent', () => {
  let component: EmployeeWithAddComponent;
  let fixture: ComponentFixture<EmployeeWithAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeWithAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeWithAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
