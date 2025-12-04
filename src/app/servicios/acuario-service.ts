import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Acuario} from "../modelos/Acuario";
import {AcuarioCrear} from "../modelos/AcuarioCrear";
import {AcuarioDetalle} from "../modelos/AcuarioDetalle";
import {AsociarPlanta} from "../modelos/AsociarPlanta";

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

  editarAcuario(id:number,acuario:AcuarioCrear):Observable<any> {
    return this.clienteHttp.put("/api/acuario/editar/"+ id, acuario);
  }

  detalleAcuario(id:number):Observable<AcuarioDetalle> {
    return this.clienteHttp.get<AcuarioDetalle>("/api/acuario/detalle/"+ id);
  }


  vincularPlanta(asociacion: AsociarPlanta){
    return this.clienteHttp.put("/api/acuario/planta/vincular",asociacion);
  }

  desvincularPlanta(asociacion: AsociarPlanta){
    return this.clienteHttp.put("/api/acuario/planta/desvincular",asociacion);
  }


  eliminarAcuario(id:number):Observable<any> {
    return this.clienteHttp.delete("/api/acuario/"+id);
  }



}
