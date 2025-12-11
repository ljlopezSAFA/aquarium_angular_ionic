import {Component, inject, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {addIcons} from "ionicons";
import {
  calendarOutline,
  closeOutline,
  cubeOutline,
  fishOutline,
  leafOutline,
  pencilOutline,
  waterOutline
} from "ionicons/icons";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AcuarioService} from "../servicios/acuario-service";
import {AcuarioDetalle} from "../modelos/AcuarioDetalle";
import {ActivatedRoute} from "@angular/router";
import {PlantaService} from "../servicios/planta-service";
import {Planta} from "../modelos/Planta";
import {AsociarPlanta} from "../modelos/AsociarPlanta";

type SeccionEditable = 'descripcion' | 'datos' | 'imagen' | 'fauna' | 'flora';

@Component({
  selector: 'app-detalle-acuario',
  templateUrl: './detalle-acuario.component.html',
  styleUrls: ['./detalle-acuario.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class DetalleAcuarioComponent implements OnInit {


  id!: number ;
  service : AcuarioService = inject(AcuarioService);
  acuario!: AcuarioDetalle;
  route: ActivatedRoute = inject(ActivatedRoute);
  plantaService: PlantaService = inject(PlantaService);

  // Flags de edición inline
  editFlags: Record<SeccionEditable, boolean> = {
    descripcion: false,
    datos: false,
    imagen: false,
    fauna: false,
    flora: false,
  };

  queryPlanta = '';
  plantaSeleccionada!: number;
  plantas: Planta[] = [];
  plantasFiltrada: any[] = [];



  constructor() {
    addIcons({ waterOutline, cubeOutline, calendarOutline,
      leafOutline, pencilOutline, fishOutline , closeOutline});
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.cargarDatosAcuario();

  }


  cargarDatosAcuario(){
    this.service.detalleAcuario(this.id).subscribe({
      next: data => this.acuario = data,
      error: error => console.log(error),
      complete: () => console.log(this.acuario),
    })

  }


  // Activa la edición inline según la sección
  editar(seccion: SeccionEditable) {
    this.editFlags[seccion] = true;

    if(seccion == 'flora'){
      this.cargarPlantas();
    }
  }

  // Guardar cambios (solo desactiva edición por ahora)
  guardar(seccion: SeccionEditable) {
    this.editFlags[seccion] = false;
    // console.log('Guardado:', seccion, this.acuario[seccion]);
  }

  // Cancelar edición
  cancelar(seccion: SeccionEditable) {
    this.editFlags[seccion] = false;
    console.log('Cancelado:', seccion);
  }


  vincularPlanta(id:number){
    const asociarPlanta = {} as AsociarPlanta;
    asociarPlanta.idPlanta = id;
    asociarPlanta.idAcuario = this.id;

    this.service.vincularPlanta(asociarPlanta).subscribe({
      next: data => {},
      error: error => console.log(error),
      complete :()=>{
        this.cargarDatosAcuario();
      }
    })
  }

  desvincularPlanta(id:number){

  }

  onSearch(event: any) {
    const value = event.target.value?.toLowerCase() || '';
    this.plantasFiltrada = value
      ? this.plantas.filter(r =>
        r.nombre.toLowerCase().includes(value)
      )
      : [];
  }

  selectItem(item: any) {
    this.queryPlanta = item.nombre;
    this.plantaSeleccionada = item.id;
    this.plantasFiltrada = []; // cerrar resultados
  }


  cargarPlantas(){
    this.plantaService.consultarPlantas().subscribe({
      next: data => this.plantas = data,
      error: error => console.log(error),
    })

  }

}
