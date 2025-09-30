import { Component, OnInit } from '@angular/core';
import {IonCard} from "@ionic/angular/standalone";
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {arrowRedoOutline, cartOutline, fishOutline, homeOutline, leafOutline, waterOutline} from "ionicons/icons";

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class TarjetaComponent  implements OnInit {

  constructor() {
    addIcons({ leafOutline,waterOutline, fishOutline,arrowRedoOutline});

  }

  ngOnInit() {}

}
