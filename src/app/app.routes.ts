import { Routes } from '@angular/router';
import {InicioComponent} from "./inicio/inicio.component";
import {LoginComponent} from "./login/login.component";
import {PecesComponent} from "./peces/peces.component";
import {TiendasComponent} from "./tiendas/tiendas.component";

export const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'peces', component: PecesComponent},
  {path: 'tiendas', component: TiendasComponent},
];
