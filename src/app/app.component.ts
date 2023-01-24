import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  appName = 'This is a One-way Data binding example.';
  clientName: string = 'Ivan';
  appliedCSSClass = 'green';
  notappliedCSSClass = false;
  myColor = 'red';
  showData($event: any) {
    console.log('button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
