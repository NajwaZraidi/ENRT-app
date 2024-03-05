import { Component, OnInit } from '@angular/core';
import { faReply} from '@fortawesome/free-solid-svg-icons'
import { faFloppyDisk,faPenToSquare,faTrash} from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../../../services/categorie.service';
import { Router} from '@angular/router';
import Swal from "sweetalert2";
import { ActivatedRoute } from '@angular/router';
import { Categorie } from '../../../models/categories.model'; 

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  faReply =faReply;
  faFloppyDisk =faFloppyDisk;
  faPenToSquare=faPenToSquare;
  faTrash=faTrash;
  formulaire: FormGroup;
  DataCategorie!:Categorie;
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
  id:any;
  ngOnInit(): void {
     this.id = this.route.snapshot.queryParamMap.get('id');
    //Vérifiez si id n'est pas null avant d'appeler la fonction GetCategorie
    if (this.id !== null) {
      console.log('ID de l\'URL :', this.id);
      this.categorieService.GetCategorieByID(this.id).subscribe({
   
        next:(res)=>{
          console.log(res);
          this.formulaire.controls['code'].setValue(res.code);
          this.formulaire.controls['description'].setValue(res.description);
          this.formulaire.controls['actif'].setValue(res.actif);
          this.formulaire.controls['libelle'].setValue(res.libelle);
          this.formulaire.controls['ordre'].setValue(res.ordre);
          this.formulaire.controls['hi7'].setValue(res.hi7);
          this.DataCategorie=res;
        },
        error:(err)=>{
          console.log(err);
        }
        
       })
      }
     else {
      console.error('ID de l\'URL est null.');

  }
}

onFormUpdate(){
  console.log("data ===>>> "+this.id)
  console.log("ddddaaaatttaaa =>>"+this.DataCategorie)
  this.categorieService.EditCategorie(this.id,this.formulaire.value).subscribe({
    next:(res)=>{
      Swal.fire("Categorie",'La modification  a réussi','success');
      this.router.navigateByUrl("/referentiel/categories")
    },
    error:()=>{
      alert("error leur de la modification de categorie")
    }
  })
  
}

}
