import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  //pass task in as an input from html iteration
  @Input() task: Task;

  //outputting an event emittor, so that the functionality of
  //deleting a task is handled in the task component (parent component)
  //parent takes it in html tag
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  //imported from fontawesome, assign to a variable to use in html
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task): void {
    this.onToggleReminder.emit(task);
  }
}
