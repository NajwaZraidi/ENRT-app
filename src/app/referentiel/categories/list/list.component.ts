import { SearchRequestBuilderService } from './../../../services/search-request-builder.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CategorieService } from '../../../services/categorie.service';
import { Categorie } from '../../../models/categories.model';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Swal from "sweetalert2";
import { Router } from '@angular/router';
import { log } from 'console';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit,OnChanges {
resetIndex() {
 this.indexCategorie = 1
 
 this.categorieService.setTest(2)
 

}
consoleIndex() {
  console.log(this.indexCategorie)
 }
  faTrash=faTrash;
  faPenToSquare=faPenToSquare;
  constructor(public categorieService:CategorieService, private router :Router,private searchRequestBuilder:SearchRequestBuilderService ){}
  ngOnInit(): void {
  
    this.GetCategoriesList()
    
   }
  ngOnChanges(changes: SimpleChanges): void {
 console.log(changes)
//  console.log("categorieIndex "+this.indexCategorie)   
 

  }

  pageSize: number=10;
  pageN:number=1;

  @Input()
  indexCategorie:number=1;
  @Input()
  totalElts:number=1;
  @Input()
  formValues: {} = {};
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Categorie[] = [];
  @Input()
  listOfData: readonly Categorie[] = [];
  setOfCheckedId = new Set<string>();
  @Output()
  listIsLoadingEvent: EventEmitter<boolean> = new EventEmitter();
  @Input()
  isListLoading?: boolean;

  // @Input()
  test?:string;

  // set isListLoading(val: boolean) {
  //   console.log("Emiting the isListLoading event with value:", val);

  //   this.listIsLoadingEvent.emit(this.isListLoading);
  // }
 
  // set sizePage(val: number ) {
    
  //   console.log(this.sizePage);
    
  // }
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

onPage(): void {
  this.isListLoading = true;
  console.log('Nouvelle taille de page sélectionnée : ', this.pageSize);
  // console.log(this.pageN);
  let searchRequest = this.searchRequestBuilder.getSearchRequest(this.formValues,{
    pageNo: this.pageN - 1,
    pageSize: this.pageSize
  });

  this.categorieService.getBySpecifications(searchRequest).subscribe({
    next: data => {
      this.listOfData = data.content
      this.totalElts= data.totalElements
      console.log(this.listOfData)
      
      // console.log("total " + this.totalElts);
      
    },
    complete: () => {
      this.isListLoading = false;
    }
  });
}
onPageIndexChange(pageN:number){
  this.pageN=pageN;
  console.log("onPageIndexChange got executed");
  
  this.onPage();  

}


onPageSizeChange(pageSize:number){
  console.log("onPageSizeChange got executed");
  this.pageSize=pageSize;
  this.onPage();
}

}
