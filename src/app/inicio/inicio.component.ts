import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {TarjetaComponent} from "../tarjeta-acuario/tarjeta.component";
import {addIcons} from "ionicons";
import {add, calendarOutline, cubeOutline, documentTextOutline, imageOutline, pencilOutline} from "ionicons/icons";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    TarjetaComponent, RouterModule
  ]
})
export class InicioComponent  implements OnInit {

  constructor() {
    addIcons({add, pencilOutline,cubeOutline, calendarOutline, documentTextOutline, imageOutline})
  }

  ngOnInit() {}

}
