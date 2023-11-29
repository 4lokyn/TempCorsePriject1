import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { newIngredient } from '../../services/newIngredient.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private newAdded: newIngredient) { }

  ngOnInit() {
  }



  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    this.newAdded.onIngredientAdded(ingName,parseInt(ingAmount))
  
  
}
}
