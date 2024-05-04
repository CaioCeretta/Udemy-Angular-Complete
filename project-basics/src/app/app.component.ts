import { Component } from '@angular/core';
import { Route, Routes } from '@angular/router';

type RouteEmitted = 'shopping-list' | 'recipe'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature: RouteEmitted

  onNavigate(route: RouteEmitted) {
    this.loadedFeature = route
  }

}
