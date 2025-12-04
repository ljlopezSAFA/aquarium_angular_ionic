import {Usuario} from "./Usuario";
import {Planta} from "./Planta";
import {AcuarioPez} from "./AcuarioPez";


export interface AcuarioDetalle{

  id:number;
  nombre:string;
  foto:string;
  descripcion:string;
  capacidad:string;
  medidas:string;
  usuario: Usuario;
  plantas: Planta[];
  peces: AcuarioPez[];

}

