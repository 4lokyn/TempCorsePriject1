import { Component, OnInit } from '@angular/core';
import { newRecipe } from '../services/newRecipe.service'


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [newRecipe]
})
export class RecipesComponent implements OnInit {

  constructor(private selectedRecipe: newRecipe) { }
  recipes = this.selectedRecipe.selectedRecipes


  ngOnInit() {

    console.log(this.recipes);
    
  }

}
