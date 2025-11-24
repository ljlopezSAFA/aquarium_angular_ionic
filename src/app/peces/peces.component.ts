import {Component, inject, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {bugOutline, fishOutline, leafOutline} from "ionicons/icons";
import {TarjetaImagenComponent} from "../tarjeta-imagen/tarjeta-imagen.component";
import {PezService} from "../servicios/pez-service";
import {Pez} from "../modelos/Pez";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-peces',
  templateUrl: './peces.component.html',
  styleUrls: ['./peces.component.scss'],
  standalone: true,
  imports: [IonicModule, TarjetaImagenComponent, NgForOf]
})
export class PecesComponent  implements OnInit {
  peces: Pez[] = [];
  private service = inject(PezService) ;


  constructor() {
    addIcons({ leafOutline,bugOutline, fishOutline });
  }

  ngOnInit() {
    this.service.consultarPeces().subscribe({
      next:(data) => this.peces = data,
      error: error => console.log(error),
      complete: () => console.log(this.peces)
    })

  }

}
