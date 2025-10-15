import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {TarjetaTiendaComponent} from "../tarjeta-tienda/tarjeta-tienda.component";

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss'],
  standalone: true,
  imports: [IonicModule, TarjetaTiendaComponent]
})
export class TiendasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
