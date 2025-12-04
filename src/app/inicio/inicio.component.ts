import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {IonicModule, IonModal} from "@ionic/angular";
import {addIcons} from "ionicons";
import {
  add,
  arrowRedoOutline,
  calendarOutline,
  createOutline,
  cubeOutline,
  documentTextOutline,
  eyeOutline,
  fishOutline,
  leafOutline,
  pencilOutline,
  trashOutline,
  waterOutline
} from "ionicons/icons";
import {RouterModule} from "@angular/router";
import {AcuarioService} from '../servicios/acuario-service';
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
    RouterModule, FormsModule
  ]
})
export class InicioComponent  implements OnInit {

  @ViewChild(IonModal) modalAcuario!: IonModal;

  boolEditar:boolean = false;
  private acuarioService = inject(AcuarioService) ;
  protected acuarios: Acuario[] = [];
  idEditar!: number;
  protected formularioAcuario: AcuarioCrear = {
    capacidad : "",
    medidas: "",
    idUsuario: 1,
    nombre: "",
    foto:"",
    descripcion:""
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

    this.acuarioService.crearAcuario(this.formularioAcuario).subscribe({
      error: (error) => console.error('Error:', error),
      complete: () => {
        this.cargarAcuarios();
      }
    })

  }


  editarAcuario(){

    console.log("Quiero editar el acuario con id" + this.idEditar);
    this.acuarioService.editarAcuario(this.idEditar,this.formularioAcuario).subscribe({
      error: (error) => console.error('Error:', error),
      complete: () => {
        this.cargarAcuarios();
        this.modalAcuario.dismiss();
      }
    })

  }


  eliminar(idAcuario:number){
    this.acuarioService.eliminarAcuario(idAcuario).subscribe({
      next: (datos) => {},
      error: (error) => console.error('Error:', error),
      complete: () => {
        this.cargarAcuarios();
      }
    })


  }


  abriCrearAcuario() {
    this.boolEditar = false;
    this.modalAcuario.present();
  }

  editar(idAcuarioBuscar: number) {
    this.idEditar = idAcuarioBuscar;
    this.boolEditar = true;
    let acu = this.acuarios.filter((acuario)=> acuario.id == idAcuarioBuscar)[0];

    this.formularioAcuario.nombre = acu.nombre;
    this.formularioAcuario.descripcion = acu.descripcion;
    this.formularioAcuario.foto = acu.foto;
    this.formularioAcuario.capacidad = acu.capacidad;
    this.formularioAcuario.medidas = acu.medidas;

    this.modalAcuario.present();
  }
}
