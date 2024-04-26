import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fourth-assignment',
  templateUrl: './fourth-assignment.component.html',
  styleUrl: './fourth-assignment.component.css'
})
export class FourthAssignmentComponent {

  @Output() oddNumbers: number[] = []
  @Output() evenNumbers: number[] = []

  onIntervalFired(firedNumber: number) {
    /*I was thinking to myself on when i was doing this exercise, if i should create this array on the own game control
    component, but by doing this way and population the oddNumbers and evenNumbers array, on the parent component, i can
    create the even and odd components array, utilizing these values with a ngFor, i'll code it into the template
    */

    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber)
    } else {
      this.oddNumbers.push(firedNumber)
    }
  }



}
