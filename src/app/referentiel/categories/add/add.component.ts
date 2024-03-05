import { Component, OnInit } from '@angular/core';
import { faReply} from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk,faRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../../../services/categorie.service'; 
import { Router} from '@angular/router';
import Swal from "sweetalert2";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  DataCategorie:any;
  faReply =faReply;
  faFloppyDisk =faFloppyDisk;
  faRotateLeft=faRotateLeft;
  formulaire: FormGroup;

  constructor(private formBuilder: FormBuilder,private categorieService:CategorieService,private router :Router,private route: ActivatedRoute) {
    this.formulaire = this.formBuilder.group({
      code: ['',Validators.required],
      description: ['',Validators.required],
      actif: [false,Validators.required],
      libelle: ['',Validators.required],
      ordre: ['',Validators.required],
      hi7: ['',Validators.required]
    });
  }


  onFormSubmit(){
    if(this.formulaire.valid){
      console.log(this.formulaire.value)
      this.categorieService.AjouterCategorie(
        this.formulaire.value
      ).subscribe({
        next: (val: any)=>{
          Swal.fire("Categorie", 'L\'ajout a réussi', 'success');
          this.formulaire.reset();
          this.router.navigateByUrl("/referentiel/categories/ajouter")
        },
        error:(err:any)=>{
         console.error(err)
        }
      })
    
    }
  }

  onFormSubmitQ(){
    if(this.formulaire.valid){
      console.log(this.formulaire.value)
      this.categorieService.AjouterCategorie(
        this.formulaire.value
      ).subscribe({
        next: (val: any)=>{
          Swal.fire("Categorie", 'L\'ajout a réussi', 'success');
          this.formulaire.reset();
          this.router.navigateByUrl("/referentiel/categories")
        },
        error:(err:any)=>{
         console.error(err)
        }
      })
    
    }
  }
  onFormReset(){
    console.log("test")
    // this.clear();
    this.formulaire.reset();
  }
 

  GetCategorie(id:string){
    this.categorieService.GetCategorieByID(id).subscribe({
   
     next:(res)=>{
       console.log(res);
       this.DataCategorie=res
     },
     error:(err)=>{
       console.log(err);
     }
     
    })
   }
}
