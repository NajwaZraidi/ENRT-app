import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../services/categorie.service';
import { Categorie } from '../../models/categories.model';

// interface ItemData {
//   id: number;
//   name: string;
//   age: number;
//   address: string;
// }


@Component({
  selector: 'app-referentiel2-table',
  templateUrl: './referentiel2-table.component.html'
})
export class Referentiel2TableComponent implements OnInit {

  constructor(private categorieService:CategorieService){}

  // listOfSelection = [
  //   {
  //     text: 'Select All Row',
  //     onSelect: () => {
  //       this.onAllChecked(true);
  //     }
  //   },
  //   {
  //     text: 'Select Odd Row',
  //     onSelect: () => {
  //       this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
  //       this.refreshCheckedStatus();
  //     }
  //   },
  //   {
  //     text: 'Select Even Row',
  //     onSelect: () => {
  //       this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
  //       this.refreshCheckedStatus();
  //     }
  //   }
  // ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Categorie[] = [];
  listOfData: readonly Categorie[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
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

 DeleteCategorie(id:any){
  console.log(id)
 }
}
