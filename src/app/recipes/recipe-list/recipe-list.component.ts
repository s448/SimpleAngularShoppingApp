import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe("Homemade Ratatouille Recipe","This delicious layered Ratatouille","https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg"),
    new Recipe("Homemade Ratatouille Recipe","This delicious layered Ratatouille recipe is not only beautiful but it is absolutely packed with","https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg"),

  ];

  constructor(){

  }

}
