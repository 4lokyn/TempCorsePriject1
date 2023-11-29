import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { newRecipe } from '../../services/newRecipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {


  ngOnInit() {
  }

}
