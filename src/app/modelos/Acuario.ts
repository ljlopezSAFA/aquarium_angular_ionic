import {Usuario} from "./Usuario";
import {Planta} from "./Planta";


export interface Acuario{

  id:number;
  nombre:string;
  foto:string;
  descripcion:string;
  capacidad:string;
  medidas:string;
  usuario: Usuario;
  plantas: Planta[];

}

