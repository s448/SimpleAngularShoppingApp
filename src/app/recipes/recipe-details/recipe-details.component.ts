import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  constructor(private recipeService: RecipeService) {}

  @Input() sRcpForDetails: Recipe;
  
  onAddToShoppingList() { 
    this.recipeService.addIngredientsToShoppingList(this.sRcpForDetails.ingredients);
  }
}
