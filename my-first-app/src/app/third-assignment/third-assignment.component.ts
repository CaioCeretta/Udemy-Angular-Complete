import { Component } from '@angular/core';

@Component({
  selector: 'app-third-assignment',
  templateUrl: './third-assignment.component.html',
  styleUrls: ['./third-assignment.component.css']
})
export class ThirdAssignmentComponent {

  secretPassword = false;
  logs: any[] = []



  logAndToggle() {
    const timestamp = new Date()


    this.secretPassword = !this.secretPassword
    // this.logs.push({counter: this.logs.length + 1, timestamp: timestamp })
    this.logs.push(new Date)

    return this.logs;
  }

}
