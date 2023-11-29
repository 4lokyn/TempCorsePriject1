import { Injectable } from "@angular/core";

@Injectable()


export class newIngredient{

ingredients: {name:string,amount:number}[] = [
    {
        name:'Apple',
        amount: 5
    },{
        name:'Tomatos',
        amount: 10
    }
]
       
onIngredientAdded(name:string,amount:number) {
    this.ingredients.push({name:name,amount:amount});
  }



}