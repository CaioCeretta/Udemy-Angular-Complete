import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { FourthAssignmentComponent } from './fourth-assignment/fourth-assignment.component';
import { GameControlComponent } from './fourth-assignment/game-control/game-control.component';
import { OddComponent } from './fourth-assignment/odd/odd.component';
import { EvenComponent } from './fourth-assignment/even/even.component';
import { BasicHightlightComponent } from './random-lessons/basic-hightlight/basic-hightlight.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    FourthAssignmentComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHightlightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
