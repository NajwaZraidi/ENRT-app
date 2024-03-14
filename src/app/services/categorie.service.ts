import { SearchRequestBuilderService } from './search-request-builder.service';
import { SearchRequest } from './../models/criteria/search-request.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categories.model';

@Injectable()
export class CategorieService {

  test:number=1;
  constructor(private http: HttpClient, private searchRequestBuilder: SearchRequestBuilderService) {}

  AjouterCategorie(data: Categorie): Observable<any>{
    return this.http.post('http://132.145.60.229:8088/categorie-document/save', data);
  }

  GetCategorie(): Observable<any>{
    return this.http.get('http://132.145.60.229:8088/categorie-document/all');
  }

  getBySpecifications(searchRequest: SearchRequest = this.searchRequestBuilder.getSearchRequest()): Observable<any> {
    console.log(searchRequest);
    console.log("test");
    
    return this.http.post("http://132.145.60.229:8088/categorie-document/specifications", searchRequest)
  }

  GetCategorieByID(id:string): Observable<any>{
    return this.http.get('http://132.145.60.229:8088/categorie-document/by-id/'+id);
  }

  DeleteCategorie(id :string){
    return this.http.delete("http://132.145.60.229:8088/categorie-document/delete/"+id);
  }

  EditCategorie(id :string,data:Categorie){
    return this.http.put<Categorie>('http://132.145.60.229:8088/categorie-document/update/'+id,data);
  }
 
  getTest(){
    return this.test;
  }
  setTest(tst:number){
    this.test=tst;
  }
}
