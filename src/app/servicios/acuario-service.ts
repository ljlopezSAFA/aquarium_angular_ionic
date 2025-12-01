import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Acuario} from "../modelos/Acuario";
import {AcuarioCrear} from "../modelos/AcuarioCrear";

@Injectable({
  providedIn: 'root'
})
export class AcuarioService {

  private clienteHttp = inject(HttpClient) ;


  // @ts-ignore
  /**
   * consultar todos
   *
   * getById
   *
   * Crear
   *
   *
   * Editar
   *
   *
   * Eliminar
   *
   */



  obtenerAcuario():Observable<Acuario[]> {
    return this.clienteHttp.get<Acuario[]>("/api/acuario/all");
  }


  crearAcuario(acuario:AcuarioCrear):Observable<any> {
    return this.clienteHttp.post("/api/acuario/crear", acuario);
  }




}
