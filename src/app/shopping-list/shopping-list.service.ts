import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

Injectable()
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 7),
        new Ingredient("Bananas", 1),
    ];

    getShoppingList() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients);
    }

}