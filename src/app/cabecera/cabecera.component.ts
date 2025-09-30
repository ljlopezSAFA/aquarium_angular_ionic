import { Component, OnInit } from '@angular/core';
import {IonHeader} from "@ionic/angular/standalone";
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
  ]
})
export class CabeceraComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
