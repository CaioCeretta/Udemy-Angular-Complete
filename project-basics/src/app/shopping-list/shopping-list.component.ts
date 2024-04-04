import { Component } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  Ingredients: Ingredient[] =
  [
    new Ingredient('Salada', 2),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() {

  }
}
