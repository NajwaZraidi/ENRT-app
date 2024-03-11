import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faRotateLeft,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Categorie } from '../../../models/categories.model';
import { CategorieService } from '../../../services/categorie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  formulaire: FormGroup;
  faRotateLeft=faRotateLeft;
  faSearch=faSearch;
  constructor(private formBuilder: FormBuilder,private categorieService:CategorieService){
    this.formulaire = this.formBuilder.group({
      code: ['',Validators.required],
      description: ['',Validators.required],
      actif: [false,Validators.required],
      libelle: ['',Validators.required],
      ordre: ['',Validators.required],
      hl7: ['',Validators.required]
    });
  }




GetCategoriesList(){
 this.categorieService.GetCategorie().subscribe({

  next:(res)=>{
    console.log(res);
    // this.listOfData=res
  },
  error:(err)=>{
    console.log(err);
  }
  
 })
}
  onFormReset(){
    this.formulaire.reset();
  }

  search(){
    const searchData: Categorie = this.formulaire.value;
    
    const searchRequest = {
      globalOperator: 'AND',
      searchCriteriaDTO: [
        { colonne: "code", value: searchData.code },
        { colonne: 'description', value: searchData.description },
        // { colonne: 'actif', value: searchData.actif },
        { colonne: 'libelle', value: searchData.libelle },
        { colonne: 'ordre', value: searchData.ordre },
        { colonne: 'hl7', value: searchData.hl7 }
      ]
    };
     console.log(searchRequest)
    this.categorieService.SearchCategorie(searchRequest).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
     });
     
  }
  
}
