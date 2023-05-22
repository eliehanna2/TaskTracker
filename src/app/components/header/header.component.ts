import { Component, OnInit,  } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

    //in order to use a service, we have to add it to the constructor
  constructor(private uiService: UiService, 
              private router: Router) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
      //this passes the showAddTask boolean value from the uiService
      //to the header component
    }

  ngOnInit(): void {}

  //defined in class and called in html to be reusable
  toggleAddTask() {
    this.uiService.toggleAddTask();
  } 

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
