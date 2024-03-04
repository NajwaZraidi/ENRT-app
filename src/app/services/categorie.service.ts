import { CategorieRequest } from './../models/categorie-request.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) {}

  AjouterCategorie(data:any): Observable<any>{
    return this.http.post('http://localhost:8080/categorie-document/save',data);
  }
  GetCategorie(): Observable<any>{
    return this.http.get('http://localhost:8080/categorie-document/all');
  }
  GetCategorieByID(id:string): Observable<any>{
    return this.http.get('http://localhost:8080/categorie-document/by-id/'+id);
  }

  DeleteCategorie(id :string){
    return this.http.delete("http://localhost:8080/categorie-document/delete/"+id);
  }
  EditCategorie(id :string, data:CategorieRequest){
    return this.http.put<Categorie>('http://localhost:8080/categorie-document/update/'+id,data);
  }
}
