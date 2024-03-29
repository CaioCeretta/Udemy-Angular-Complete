import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  // templateUrl: './warning-alert.component.html',
  template: `
    <p>This is a warning, you are in danger</p>
  `
  ,
  // styleUrls: ['./warning-alert.component.css']
  styles: [`
    p {
      background-color: mistyrose;
      padding: 20px;
      border: 1px solid red;
    }
  `]


})
export class WarningAlertComponent {

}
