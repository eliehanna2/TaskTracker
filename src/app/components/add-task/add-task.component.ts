import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import {UiService} from '../../services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  //when working with forms, we need to add properties for each field
  text: string;
  day: string;
  reminder: boolean = false; //false by default
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
      //this passes the showAddTask boolean value from the uiService
      //to the add-task component
  }

  onSubmit() {
    //validate text and day:
    if (!this.text ||!this.day) {
      alert('Please add a task and a day');
      return;
    }

    //object that we want to submit
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;

  }
}
