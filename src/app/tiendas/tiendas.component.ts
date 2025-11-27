import {Component, inject, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {TarjetaTiendaComponent} from "../tarjeta-tienda/tarjeta-tienda.component";
import {TiendaService} from "../servicios/tienda-service";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss'],
  standalone: true,
  imports: [IonicModule, TarjetaTiendaComponent, JsonPipe]
})
export class TiendasComponent  implements OnInit {

  private tiendaService = inject(TiendaService);
  tiendas = this.tiendaService.tiendasResource;

  constructor() { }

  ngOnInit() {}

}
