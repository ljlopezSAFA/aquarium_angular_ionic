import {Component, inject} from '@angular/core';
import {IonApp, IonContent, IonFooter, IonHeader, IonRouterOutlet} from '@ionic/angular/standalone';
import {CabeceraComponent} from "./cabecera/cabecera.component";
import {MenuInferiorComponent} from "./menu-inferior/menu-inferior.component";
import {IonicModule} from "@ionic/angular";
import {NavigationEnd, Router} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone:true,
  imports: [IonicModule, CabeceraComponent, MenuInferiorComponent, CommonModule],
})
export class AppComponent {
  showHeaderFooter = true;
  private router = inject(Router);

  ngOnInit(): void {
    // Lógica para mostrar/ocultar header y footer según la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeaderFooter = event.url !== '/login';
      }
    });
  }
}
