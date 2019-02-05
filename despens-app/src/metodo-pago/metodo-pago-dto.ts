import { IsString } from "class-validator";

export class MetodoPagoDto{

    @IsString()
    metodoPago:string;
    
}