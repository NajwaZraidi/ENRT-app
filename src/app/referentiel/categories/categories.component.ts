import { SearchRequestBuilderService } from './../../services/search-request-builder.service';
import { SearchCriteria } from './../../models/criteria/search-criteria.model';
import { CategorieService } from './../../services/categorie.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Categorie } from '../../models/categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  faPlus=faPlus;
  panel: {active: boolean, disabled: boolean} = {
    active: false,
    disabled: false
  };
  formulaire: FormGroup;
  listOfData: readonly Categorie[] = [];
  isListLoading: boolean = false;

  constructor(private formBuilder: FormBuilder, private categorieService: CategorieService, private searchRequestBuilder: SearchRequestBuilderService) {
    this.formulaire = this.formBuilder.group({
      code: '',
      description: '',
      actif: false,
      libelle: '',
      ordre: '',
      hl7: ''
    });
  }
  ngOnInit(): void {
    this.onFormReset();
  }

  onListLoading(isLoading: boolean) {
    this.isListLoading = isLoading
    console.log(isLoading);
  }

  onFormSubmit(){
    let searchRequest = this.searchRequestBuilder.getSearchRequest(this.formulaire.value);

    this.isListLoading = true;
    this.categorieService.getBySpecifications(searchRequest).subscribe({
      next: data => {
        this.listOfData = data.content
      },
      complete: () => {
        this.isListLoading = false;
      }
    });
  }

  onFormReset() {
    this.formulaire.reset();
    this.onFormSubmit();
  }
}
