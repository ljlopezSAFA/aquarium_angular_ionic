import {Component, inject, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {TarjetaComponent} from "../tarjeta-acuario/tarjeta.component";
import {addIcons} from "ionicons";
import {
  add, arrowRedoOutline,
  calendarOutline, createOutline,
  cubeOutline,
  documentTextOutline, eyeOutline, fishOutline,
  imageOutline, leafOutline,
  pencilOutline,
  trashOutline, waterOutline
} from "ionicons/icons";
import {Router, RouterModule} from "@angular/router";
import { AcuarioService } from '../servicios/acuario-service';
import {Acuario} from "../modelos/Acuario";
import {AcuarioCrear} from "../modelos/AcuarioCrear";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    TarjetaComponent, RouterModule, FormsModule
  ]
})
export class InicioComponent  implements OnInit {


  private acuarioService = inject(AcuarioService) ;
  protected acuarios: Acuario[] = [];
  protected formularioAcuario: AcuarioCrear = {
    capacidad : "",
    medidas: "",
    idUsuario: 1,
    tipo: ""
  } ;




  constructor() {
    addIcons({add, pencilOutline,cubeOutline, calendarOutline,
      documentTextOutline,eyeOutline,trashOutline, createOutline,
      leafOutline,waterOutline, fishOutline,arrowRedoOutline})
  }

  ngOnInit() {
    this.cargarAcuarios();
  }




  cargarAcuarios(): void {
    this.acuarioService.obtenerAcuario().subscribe({
      next: (datos) => {
        console.log('Datos:', datos);
        this.acuarios = datos;
      },
      error: (error) => console.error('Error:', error),
      complete: () => console.log('Petición completada')
    })
  }



  crearAcuario(){
    console.log(this.formularioAcuario);

    this.acuarioService.crearAcuario(this.formularioAcuario).subscribe({
      error: (error) => console.error('Error:', error),
      complete: () => {
        this.cargarAcuarios();

      }
    })

  }


  editarAcuario(id:number){


    }


  eliminar(id:number){


  }


}
