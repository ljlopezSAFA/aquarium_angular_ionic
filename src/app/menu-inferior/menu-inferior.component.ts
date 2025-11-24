import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {cartOutline, fishOutline, homeOutline, logoIonic} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu-inferior',
  templateUrl: './menu-inferior.component.html',
  styleUrls: ['./menu-inferior.component.scss'],
  standalone: true,
  imports: [
    IonicModule, RouterLink
  ]
})
export class MenuInferiorComponent  implements OnInit {

  constructor() {
    addIcons({ homeOutline,cartOutline, fishOutline });

  }

  ngOnInit() {}

}
