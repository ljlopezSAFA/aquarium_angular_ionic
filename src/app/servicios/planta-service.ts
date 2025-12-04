import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Planta} from "../modelos/Planta";

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private apiUrl = "/api";
  private http = inject(HttpClient) ;

  constructor() {}


  consultarPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl + "/plantas/all")
  }




}
