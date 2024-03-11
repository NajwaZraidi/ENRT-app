import { SearchRequestBuilderService } from './../../../services/search-request-builder.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategorieService } from '../../../services/categorie.service';
import { Categorie } from '../../../models/categories.model';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  faTrash=faTrash;
  faPenToSquare=faPenToSquare;
  constructor(private categorieService:CategorieService, private router :Router){}


  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Categorie[] = [];
  @Input()
  listOfData: readonly Categorie[] = [];
  setOfCheckedId = new Set<string>();
  @Output()
  listIsLoadingEvent: EventEmitter<boolean> = new EventEmitter();

  set isListLoading(val: boolean) {
    console.log("Emiting the isListLoading event with value:", val);

    this.listIsLoadingEvent.emit(this.isListLoading);
  }

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
  }

 GetCategoriesList(){
  this.isListLoading = true;
  this.categorieService.getBySpecifications().subscribe({

   next:(res)=>{
     this.listOfData = res.content
     console.log(this.isListLoading);
   },

   error:(err)=>{
     console.log(err);
   },
   complete: () => {

    this.isListLoading = false;

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
  this.router.navigateByUrl("/referentiel/categories/consulter?id="+id)
}
}
