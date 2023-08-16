import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({ providedIn: 'root' })
export class RecipeService {
    constructor(private slService: ShoppingListService) {}
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Homemade Ratatouille Recipe", "This delicious layered Ratatouille", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg", [
            new Ingredient('Meat', 1),
            new Ingredient('Meat', 1),
        ]),
        new Recipe("Homemade Ratatouille Recipe", "This delicious layered Ratatouille recipe is not only beautiful but it is absolutely packed with", "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg", [
            new Ingredient('Meat', 1),
            new Ingredient('Meat', 1),
        ]),
    ];

    getRecipesList() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient []) {
        this.slService.addIngredients(ingredients);
    }
}