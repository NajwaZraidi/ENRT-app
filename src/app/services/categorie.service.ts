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
    return this.http.post('http://localhost:8080/categories/save',data);
  }
  GetCategorie(): Observable<any>{
    return this.http.get('http://localhost:8080/categories/all');
  }
  GetCategorieByID(id:string): Observable<any>{
    return this.http.get('http://localhost:8080/categories/by-id/'+id);
  }

  DeleteCategorie(id :string){
    return this.http.delete("http://localhost:8080/categories/delete/"+id);
  }
  EditCategorie(id :string,data:Categorie){
    return this.http.put<Categorie>('http://localhost:8080/categories/update/'+id,data);
  }
}
