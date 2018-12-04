import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJumbotronInprocessComponent } from './inprocess.component';

describe('DashboardJumbotronInprocessComponent', () => {
  let component: DashboardJumbotronInprocessComponent;
  let fixture: ComponentFixture<DashboardJumbotronInprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardJumbotronInprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardJumbotronInprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
