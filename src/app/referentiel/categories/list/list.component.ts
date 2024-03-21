import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../../services/categorie.service';
import { Categorie } from '../../../models/categories.model';
import { faTrash,faPenToSquare,faSearch,faRotateLeft,faPlus } from '@fortawesome/free-solid-svg-icons'
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchRequestBuilderService } from '../../../services/search-request-builder.service';
import { log } from 'console';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  formValue?:{};
handleFormRecieved(form: {}) {
   this.formValue=form;
   
}
  handleDataRecieved(data: Categorie[]) {
    this.listOfData=data;
    this.index=1
  }
  
  faSearch=faSearch
  faTrash=faTrash;
  faPenToSquare=faPenToSquare;
  faRotateLeft=faRotateLeft;
  faPlus=faPlus;
  isListLoading?:boolean;
  pageSize: number=10;
  pageN:number=1;
  index:number=1;
  totalElts:number=1;
  constructor(private categorieService:CategorieService,private router :Router,private searchRequestBuilder:SearchRequestBuilderService){

  }

 
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
    // console.log('id--->',id)
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
    // console.log(this.setOfCheckedId);

    
  }

  ngOnInit(): void {
     this.search();
  }
 

 
  DeleteCategorie(){
  // console.log(this.setOfCheckedId)
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
            this.search();
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
  // console.log("data ===>>> "+id)
  this.router.navigateByUrl("/referentiel/categories/consulter?id="+id)
}



search(){
  let searchRequest = this.searchRequestBuilder.getSearchRequest(this.formValue,{
    pageNo: this.pageN - 1,
    pageSize: this.pageSize
  });
  console.log("----------");
  console.log(this.formValue);
  
  console.log("----------");
  console.log(searchRequest)
 
  this.isListLoading = true;
  this.categorieService.getBySpecifications(searchRequest).subscribe({
    next: data => {
      this.listOfData = data.content
      this.totalElts=data.totalElements
    },
    complete: () => {
      this.isListLoading = false;
    }
  });
}

onPageIndexChange(pageN:number){
  this.pageN=pageN;
  // console.log("onPageIndexChange got executed");
  this.search()  
  
}


onPageSizeChange(pageSize:number){
  // console.log("onPageSizeChange got executed");
  this.pageSize=pageSize;
  this.search()
}
}
