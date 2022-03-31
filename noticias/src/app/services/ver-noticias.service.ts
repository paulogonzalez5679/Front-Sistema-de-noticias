import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerNoticiasService {

  url ='http://localhost:3000/api/noticias'
  constructor(private http:HttpClient) { }
  getNoticias(): Observable<any>{
    return this.http.get(this.url);
  }
  eliminarNoticias(id: string): Observable<any>{
    return this.http.delete(this.url +'/'+ id);
  }
}
