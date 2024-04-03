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
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Feasy-peasy.ai%2Fai-image-generator%2Fimages%2Fauthentic-south-indian-sambar-recipe-drumsticks-pumpkins-tomatoes-lentils&psig=AOvVaw2fSWnGEv3Zb2w5ASBFAU0p&ust=1712193676864000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjSqNHwpIUDFQAAAAAdAAAAABAE')
  ];




}
