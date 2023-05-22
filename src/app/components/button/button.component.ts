import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  //takes these as input in the html tag
  @Input() color!: string;
  @Input() text!: string;

  //outputting an event emitter, taken in as an input in the html tag
  @Output() btnClick = new EventEmitter();

  constructor() { }

  //to run things when the component loads, can be used for API calls
  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
