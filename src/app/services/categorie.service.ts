import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http:HttpClient) {}

  AjouterCategorie(data:any): Observable<any>{
    return this.http.post('http://localhost:3000/categorie',data);
  }
  GetCategorie(): Observable<any>{
    return this.http.get('http://localhost:3000/categorie');
  }
}
