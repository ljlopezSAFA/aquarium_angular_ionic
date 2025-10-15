import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {cartOutline, locationOutline} from "ionicons/icons";

@Component({
  selector: 'app-tarjeta-tienda',
  templateUrl: './tarjeta-tienda.component.html',
  styleUrls: ['./tarjeta-tienda.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class TarjetaTiendaComponent  implements OnInit {
  @Input() nombre!: string;
  @Input() ubicacion!: string;
  @Input() logo!: string;

  constructor() {
    addIcons({locationOutline, cartOutline})
  }

  ngOnInit() {}

}
