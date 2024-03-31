import { Component } from '@angular/core';

@Component({
  selector: 'app-second-assignment',
  templateUrl: './second-assignment.component.html',
  styleUrls: ['./second-assignment.component.css']
})
export class SecondAssignmentComponent {

  username: string = '';

  clearUsernameInput() {
    this.username = ''
  }

}
