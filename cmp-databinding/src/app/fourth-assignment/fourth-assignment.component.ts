import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fourth-assignment',
  templateUrl: './fourth-assignment.component.html',
  styleUrl: './fourth-assignment.component.css'
})
export class FourthAssignmentComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = []


  onIntervalFired(firedNumber: number) {
    console.log(firedNumber)

    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber)
    } else {
      this.oddNumbers.push(firedNumber)
    }
  }



}
