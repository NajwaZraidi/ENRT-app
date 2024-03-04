import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../services/categorie.service';
import { Categorie } from '../../models/categories.model';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Swal from "sweetalert2";
import { Router } from '@angular/router';


@Component({
  selector: 'app-referentiel2-table',
  templateUrl: './referentiel2-table.component.html',
  styleUrls: ['./referentiel2-table.component.css']
})
export class Referentiel2TableComponent implements OnInit {
  faTrash=faTrash;
  faPenToSquare=faPenToSquare;
  constructor(private categorieService:CategorieService,private router :Router){}


  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Categorie[] = [];
  listOfData: readonly Categorie[] = [];
  setOfCheckedId = new Set<string>();

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: string, checked: boolean): void {
    console.log('id--->',id)
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly Categorie[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
    console.log(this.setOfCheckedId);


  }

  ngOnInit(): void {
     this.GetCategoriesList();
  }


 GetCategoriesList(){
  this.categorieService.GetCategorie().subscribe({

   next:(res)=>{
     console.log(res);
     this.listOfData=res
   },
   error:(err)=>{
     console.log(err);
   }

  })
 }


  DeleteCategorie(){
  console.log(this.setOfCheckedId)
  // this.refreshCheckedStatus();
     Swal.fire({
    title: 'Êtes-vous sûr de vouloir supprimer ?' ,
    text: 'ce n\'est pas possible de recevoir vous données ' ,
    icon: 'warning' ,
    showCancelButton: true,
    confirmButtonText: 'Supprimer',
    cancelButtonText: 'Annuler'
  }).then((result) => {
    if (result.value) {
      for(let id of this.setOfCheckedId){
      this.categorieService.DeleteCategorie(id)
        .subscribe({
          next:(res)=>{
            Swal.fire("Suppression","Le categorie a supprimer :( ","success")
            this.GetCategoriesList();
          },
          error:(err)=>{
            alert("error")
          }
        })
        this.setOfCheckedId.delete(id);
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Annulation', 'Le categorie n\'a pas supprimer :)', 'error');
    }
  });

}


EditCategorie(id:string){
  console.log("data ===>>> "+id)
  this.router.navigateByUrl("/referentiel/voir?id="+id)
}
}
