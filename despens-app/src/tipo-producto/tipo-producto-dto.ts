import { IsString } from "class-validator";

export class TipoProducto{

    @IsString()
    tipoProducto:string;
    
}