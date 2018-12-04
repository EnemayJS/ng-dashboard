import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJumbotronDoneComponent } from './done.component';

describe('DashboardJumbotronDoneComponent', () => {
  let component: DashboardJumbotronDoneComponent;
  let fixture: ComponentFixture<DashboardJumbotronDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardJumbotronDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardJumbotronDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
