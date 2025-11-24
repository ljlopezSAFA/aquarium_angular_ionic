import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PezService {

  private apiUrl = "/api";
  private http = inject(HttpClient) ;



  constructor() {}


  consultarPeces(): Observable<any> {
    return this.http.get(this.apiUrl + "/pez/all")
  }




}
