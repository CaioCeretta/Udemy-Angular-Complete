import { Component, EventEmitter, Output } from "@angular/core";
import { Route, Routes } from "@angular/router";

type RouteEmitted = 'shopping-list' | 'recipe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() featureSelected = new EventEmitter<string>()

    onSelect(route: RouteEmitted) {
      this.featureSelected.emit(route)
    }

}
