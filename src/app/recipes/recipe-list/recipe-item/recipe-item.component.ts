import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { newRecipe } from '../../../services/newRecipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  

  constructor(private newRecipe: newRecipe) { }
  recipe = this.newRecipe.recipes
  
  ngOnInit() {
 
    
  }

onSelected(data:{name:string,desc:string,imagePath:string}) {

  this.newRecipe.onSelectedRecipe(data)
  
  
}

}
