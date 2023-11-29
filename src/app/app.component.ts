import { Component } from '@angular/core';
import { newIngredient } from './services/newIngredient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [newIngredient]
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
