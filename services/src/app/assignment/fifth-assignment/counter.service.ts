import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementInactiveToActiveCounter() {
    this.inactiveToActiveCounter++
    console.log('Inactive to Active Counter ' +  this.inactiveToActiveCounter)
  }

  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter++
    console.log('Active to Inactive Counter ' + this.activeToInactiveCounter)
  }
}
