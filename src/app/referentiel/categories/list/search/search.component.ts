import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faRotateLeft,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Categorie } from '../../../../models/categories.model';
import { CategorieService } from '../../../../services/categorie.service';
import { SearchRequestBuilderService } from '../../../../services/search-request-builder.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  formulaire: FormGroup;
  faRotateLeft=faRotateLeft;
  faSearch=faSearch;
  listOfData: readonly Categorie[] = [];
  isListLoading?:boolean;
  pageSize: number=10;
  pageN:number=1;
  constructor(private formBuilder: FormBuilder,private categorieService:CategorieService,private searchRequestBuilder:SearchRequestBuilderService){
    this.formulaire = this.formBuilder.group({
      code: ['',Validators.required],
      description: ['',Validators.required],
      actif: [false,Validators.required],
      libelle: ['',Validators.required],
      ordre: ['',Validators.required],
      hl7: ['',Validators.required]
    });
  }




  onFormReset(){
    this.formulaire.reset();
  }

  search(){
    let searchRequest = this.searchRequestBuilder.getSearchRequest(this.formulaire.value,{
      pageNo: this.pageN - 1,
      pageSize: this.pageSize
    });
    console.log(searchRequest)
    console.log("--------------------");
    
    this.isListLoading = true;
    this.categorieService.getBySpecifications(searchRequest).subscribe({
      next: data => {
        this.listOfData = data.content
        console.log(searchRequest)
      },
      complete: () => {
        this.isListLoading = false;
      }
    });
  }
  
}
