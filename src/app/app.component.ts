import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {CabeceraComponent} from "./cabecera/cabecera.component";
import {MenuInferiorComponent} from "./menu-inferior/menu-inferior.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, CabeceraComponent, MenuInferiorComponent],
})
export class AppComponent {
  constructor() {}
}
