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
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  faReply =faReply;
  faFloppyDisk =faFloppyDisk;
  faPenToSquare=faPenToSquare;
  faTrash=faTrash;
  formulaire: FormGroup;
  isDisabled :boolean =true;
  dataCategorie : Categorie | null = null;
  constructor(private formBuilder: FormBuilder,private categorieService:CategorieService,private router :Router,private route: ActivatedRoute) {
    this.formulaire = this.formBuilder.group({
      code: ['',Validators.required],
      description: ['',Validators.required],
      actif: [false,Validators.required],
      libelle: ['',Validators.required],
      ordre: ['',Validators.required],
      hl7: ['',Validators.required]
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
          this.dataCategorie=res;
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
  this.router.navigateByUrl("/referentiel/categories/edit?id="+this.id)
}
   onHandleDelete(){
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer ?' ,
      text: 'ce n\'est pas possible de recevoir vous données ' ,
      icon: 'warning' ,
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {

        this.categorieService.DeleteCategorie(this.id)
          .subscribe({
            next:(res)=>{
              Swal.fire("Suppression","La categorie a supprimer :( ","success")
              this.router.navigateByUrl("/referentiel/categories")
            },
            error:(err)=>{
              alert("error")
            }
          })

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Annulation', 'La categorie n\'a pas supprimer :)', 'error');
      }
    });
}
}
