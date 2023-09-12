import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-directives-assignment';
  // secretPassword = 'tunaa';
  toggleDetails = false;
  log: { timestamp: Date, message: string}[] = []

  constructor() {

  }

  toggleButton() {
    this.toggleDetails = !this.toggleDetails
    this.log.push({ timestamp: new Date(), message: 'Button was clicked'})

  }
}
