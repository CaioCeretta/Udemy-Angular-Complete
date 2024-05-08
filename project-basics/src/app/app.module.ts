import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClassStyleDirectivesComponentComponent } from './directives-recap/class-style-directives-component/class-style-directives-component.component';
import { HeaderComponent } from './header/header.component';
import { BasicHighlightDirective } from './random-lessons/basic-hightlight/basic-hightlight.directive';
import { BetterHighlightDirective } from './random-lessons/better-highlight/better-highlight.directive';
import { UnlessDirective } from './random-lessons/unless/unless.directive';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { StructuralAttributeDirectivesComponent } from './structural-attribute/structural-attribute-directives-recap.component';
import { NgSwitchComponent } from './random-lessons/ng-switch/ng-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    StructuralAttributeDirectivesComponent,
    ClassStyleDirectivesComponentComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    NgSwitchComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
