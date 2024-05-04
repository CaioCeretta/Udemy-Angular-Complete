import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe(
      'pipipoporo 1',
      'pipipoporo 1 description',
      'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/31fd5809-0b9c-48fb-bc54-290fc536a502/719c0ca5-ecbe-4d0b-b4b0-f46bc4c1513f.png'),
    new Recipe(
      'pipipoporo 2 ',
      'pipipoporo description 2',
      'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/31fd5809-0b9c-48fb-bc54-290fc536a502/719c0ca5-ecbe-4d0b-b4b0-f46bc4c1513f.png')
  ];


  onRecipeSelected(recipe: Recipe) {

    this.recipeWasSelected.emit(recipe);

  }


}
