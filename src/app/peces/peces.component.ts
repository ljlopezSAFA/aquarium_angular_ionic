import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {bugOutline, fishOutline, leafOutline} from "ionicons/icons";
import {TarjetaImagenComponent} from "../tarjeta-imagen/tarjeta-imagen.component";

@Component({
  selector: 'app-peces',
  templateUrl: './peces.component.html',
  styleUrls: ['./peces.component.scss'],
  standalone: true,
  imports: [IonicModule, TarjetaImagenComponent]
})
export class PecesComponent  implements OnInit {

  constructor() {
    addIcons({ leafOutline,bugOutline, fishOutline });
  }

  ngOnInit() {}

}
