import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'pipipoporo',
      'pipipoporo description',
      'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/31fd5809-0b9c-48fb-bc54-290fc536a502/719c0ca5-ecbe-4d0b-b4b0-f46bc4c1513f.png'),
    new Recipe(
      'pipipoporo',
      'pipipoporo description',
      'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/31fd5809-0b9c-48fb-bc54-290fc536a502/719c0ca5-ecbe-4d0b-b4b0-f46bc4c1513f.png')

  ];




}
