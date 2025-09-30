import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CabeceraComponent} from "../cabecera/cabecera.component";
import {TarjetaComponent} from "../tarjeta/tarjeta.component";
import {MenuInferiorComponent} from "../menu-inferior/menu-inferior.component";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CabeceraComponent,
    TarjetaComponent,
    MenuInferiorComponent
  ]
})
export class InicioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
