import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categories.model';
import { SearchRequest } from '../models/criteria/search-request.model';
import { SearchRequestBuilderService } from './search-request-builder.service';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient,private searchRequestBuilder:SearchRequestBuilderService) {}

  AjouterCategorie(data:any): Observable<any>{
    return this.http.post('http://132.145.60.229:8088/categorie-document/save',data);
  }
  GetCategorie(): Observable<any>{
    return this.http.get('http://132.145.60.229:8088/categorie-document/all');
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
  
  getBySpecifications(searchRequest: SearchRequest = this.searchRequestBuilder.getSearchRequest()): Observable<any> {
    return this.http.post("http://132.145.60.229:8088/categorie-document/specifications", searchRequest)
  }
  
}
