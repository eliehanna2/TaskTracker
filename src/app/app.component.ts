import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //change detection strategy is set to default, which means that the component will be checked every time something changes
  //if it was set to onPush, then the change detection will be triggered only when the button is clicked
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'my-app';
}
