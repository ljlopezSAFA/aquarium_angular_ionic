import {Injectable} from '@angular/core';
import {httpResource} from "@angular/common/http";
import {Tienda} from "../modelos/Tienda";

@Injectable({
  providedIn: 'root'
})
export class TiendaService {


  tiendasResource = httpResource<Tienda[]>(() => 'api/tiendas/all',
    {
      defaultValue: []
    }
  );


  getTiendaResource(id: number) {
    return httpResource<Tienda>(() =>
      id ? `api/tiendas/${id}` : undefined
    );
  }

}
