import { Component, EventEmitter, Output } from '@angular/core';
import { last } from 'rxjs-compat/operator/last';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  /* Here we are outputting to the parent the timerCount with the current component count */
  @Output() timerCount = new EventEmitter<number>()
  gameTimer: any;

  count: number = 0;

  startGame() {
    this.gameTimer = setInterval(() => {
      //With this we should emit incrementing numbers to the parent
      this.timerCount.emit(this.count)
      this.count++
    }, 1000)



  }

  stopGame() {
    clearInterval(this.gameTimer)
  }



}
