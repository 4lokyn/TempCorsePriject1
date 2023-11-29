import { Component } from '@angular/core';


import { newIngredient } from '../services/newIngredient.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent  {
  
  
  constructor(private ingredient: newIngredient){}
  ingredients:{}[]= this.ingredient.ingredients
 
 
 
}
