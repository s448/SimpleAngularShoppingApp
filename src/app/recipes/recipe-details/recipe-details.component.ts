import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{
  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
    private router: Router) {}
  id: number;
  sRcpForDetails: Recipe;
  
  onAddToShoppingList() { 
    this.recipeService.addIngredientsToShoppingList(this.sRcpForDetails.ingredients);
  }


  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        console.log(this.recipeService.getRecipe(0));
        this.sRcpForDetails = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
