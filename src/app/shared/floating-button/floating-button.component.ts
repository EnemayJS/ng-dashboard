import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.css']
})
export class FloatingButtonComponent implements OnInit {

  @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.click.emit(null);
  }
}
