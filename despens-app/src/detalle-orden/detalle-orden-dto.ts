import { IsNumber } from "class-validator";

export class DetallOrdenDto{
    
    @IsNumber()
    cantidadOrden:number;

    @IsNumber()
    precioUnit:number;

    @IsNumber()
    precioTotal:number;

}