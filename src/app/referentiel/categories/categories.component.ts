import { SearchRequestBuilderService } from './../../services/search-request-builder.service';
import { SearchCriteria } from './../../models/criteria/search-criteria.model';
import { CategorieService } from './../../services/categorie.service';
import { Component, Input, OnInit, input } from '@angular/core';
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
  pageN: number=1;
  pageSize: number=10;
  totalElts: number=20;
  indexCategorie:number=1;
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
    console.log("test");
    
  }

  onListLoading(isLoading: boolean) {
    this.isListLoading = isLoading
  }

  onFormSubmit(){
   
    let searchRequest = this.searchRequestBuilder.getSearchRequest(this.formulaire.value,{
      pageNo: this.pageN - 1,
      pageSize: this.pageSize
    });
    
    this.isListLoading = true;
    this.categorieService.getBySpecifications(searchRequest).subscribe({
      next: data => {
        this.listOfData = data.content
        this.totalElts=data.totalElements
        this.indexCategorie=2
      },
      complete: () => {
        console.log(this.indexCategorie)
        this.isListLoading = false;
      }
    });
    
  }

  onFormReset() {
    this.formulaire.reset();
    this.onFormSubmit();
  }
}
