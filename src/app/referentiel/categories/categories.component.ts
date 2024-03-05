import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  faPlus=faPlus;
}
