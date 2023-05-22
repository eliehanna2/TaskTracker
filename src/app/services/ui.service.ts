import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  //boolean that indicates whether the form is shown or not
  private showAddTask: boolean = false;

  //A Subject is a special type of Observable that allows
  //values to be multicasted to many Observers
  private subject = new Subject<any>();
  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    //pass the value to the subject through the .next function
    this.subject.next(this.showAddTask);
  } 

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
