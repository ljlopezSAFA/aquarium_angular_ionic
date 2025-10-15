import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { addIcons } from "ionicons";
import { calendarOutline, cubeOutline, leafOutline, pencilOutline, waterOutline, fishOutline } from "ionicons/icons";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

type SeccionEditable = 'descripcion' | 'datos' | 'imagen';

@Component({
  selector: 'app-detalle-acuario',
  templateUrl: './detalle-acuario.component.html',
  styleUrls: ['./detalle-acuario.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class DetalleAcuarioComponent implements OnInit {

  acuario = {
    nombre: 'Acuario Amazónico',
    imagen: 'https://olacuario.es/blog/wp-content/uploads/2022/09/Plantas-de-acuario-de-agua-dulce.jpg',
    descripcion: 'Un acuario inspirado en el ecosistema del Amazonas, con plantas de hoja ancha y peces tropicales de agua dulce.',
    datos: {
      capacidad: '50 L',
      medidas: '60x30x30 cm',
      fechaMontaje: '2024-04-12',
    },
    fauna: [
      'Neones (Paracheirodon innesi)',
      'Corydoras panda',
      'Ancistrus sp.',
    ],
    flora: [
      'Anubias barteri',
      'Echinodorus amazonicus',
      'Microsorum pteropus (Helecho de Java)',
    ],
  };

  // Flags de edición inline
  editFlags: Record<SeccionEditable, boolean> = {
    descripcion: false,
    datos: false,
    imagen: false,
  };

  constructor() {
    addIcons({ waterOutline, cubeOutline, calendarOutline, leafOutline, pencilOutline, fishOutline });
  }

  ngOnInit() {}

  // Activa la edición inline según la sección
  editar(seccion: SeccionEditable) {
    this.editFlags[seccion] = true;
  }

  // Guardar cambios (solo desactiva edición por ahora)
  guardar(seccion: SeccionEditable) {
    this.editFlags[seccion] = false;
    console.log('Guardado:', seccion, this.acuario[seccion]);
  }

  // Cancelar edición
  cancelar(seccion: SeccionEditable) {
    this.editFlags[seccion] = false;
    console.log('Cancelado:', seccion);
  }

  // Placeholder para editar fauna/flora con modal
  editarLista(tipo: 'fauna' | 'flora') {
    console.log('Editar lista:', tipo);
  }
}
