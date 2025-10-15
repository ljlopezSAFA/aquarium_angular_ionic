import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-tarjeta-imagen',
  templateUrl: './tarjeta-imagen.component.html',
  styleUrls: ['./tarjeta-imagen.component.scss'],
  standalone: true,
  imports:[IonicModule]
})
export class TarjetaImagenComponent  implements OnInit {
  @Input() titulo: string = '';
  @Input() imagen: string = '';
  @Input() texto: string = '';
  flipped: boolean = false;


  constructor() { }

  ngOnInit() {}

  toggleFlip() {
    this.flipped = !this.flipped;
  }

  get bgImage() {
    return `url(${this.imagen})`;
  }

}
