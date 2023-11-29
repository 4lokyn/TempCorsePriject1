import { Injectable } from "@angular/core"
import { Ingredient } from "../shared/ingredient.model"

@Injectable()

export class newRecipe{
    selectedRecipes:{}[] = []
    recipes:{}[]=[
        {
            name:'Burger',
            desc:'Best burger in town',
            imagePath:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            ingredients: [
                new Ingredient('Meet', 2),
                new Ingredient('French Fries', 10)
            ]
        },{
            name:'Another Test Recipe',
            desc:'This is simply a test',
            imagePath:'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            ingredients: [
                new Ingredient('Buns', 2),
                new Ingredient('Meet', 2)
            ]
        }
    ]

onSelectedRecipe(recipe:{name:string,desc:string,imagePath:string}) {
        this.selectedRecipes.push(recipe)
   
        
        
}

}