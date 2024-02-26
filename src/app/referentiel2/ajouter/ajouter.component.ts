import { Component } from '@angular/core';
import { faReply} from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk,faRotateLeft} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../../services/categorie.service';
import { Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {
  faReply =faReply;
  faFloppyDisk =faFloppyDisk;
  faRotateLeft=faRotateLeft;
  formulaire: FormGroup;

  constructor(private formBuilder: FormBuilder,private categorieService:CategorieService,private router :Router) {
    this.formulaire = this.formBuilder.group({
      code: [''],
      description: [''],
      actif: [false],
      libelle: [''],
      ordre: [''],
      hi7: ['']
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
          this.clear()
          this.formulaire.reset;
          this.router.navigateByUrl("/Referentiel/Ajouter")
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
          this.clear()
          this.formulaire.reset;
          this.router.navigateByUrl("/Referentiel")
        },
        error:(err:any)=>{
         console.error(err)
        }
      })
    
    }
  }
  onFormReset(){
    console.log("test")
    this.clear();
  }
  clear(){
    this.formulaire.controls['code'].setValue('');
    this.formulaire.controls['description'].setValue('');
    this.formulaire.controls['actif'].setValue('');
    this.formulaire.controls['libelle'].setValue('');
    this.formulaire.controls['ordre'].setValue('');
    this.formulaire.controls['hi7'].setValue('');
  }

}