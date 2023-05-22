import { Component, OnInit } from '@angular/core';
//import service:
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];

  //in order to use a service, we need to add it as a parameter in the constructor
  constructor(private taskService: TaskService) { }
  
  ngOnInit(): void {
    this.taskService.getTasks()
    .subscribe(
      (tasks) => this.tasks = tasks
      );
    //we used observables (asynchronous data) and subscribed to the observable (like promises)

  }

  //"subscribe" is what happens after the task service is done with the request

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task)
    .subscribe(
      () => this.tasks = this.tasks.filter(t => t.id !== task.id)
      );
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
  
  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(
      (task) => (this.tasks.push(task))
    );
  }
}
