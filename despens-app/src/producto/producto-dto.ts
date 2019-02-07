import { IsString, IsNumber, IsInt } from "class-validator";

export class ProductoDto{
    
    @IsString()
    nombreProducto:string;

    @IsString()
    descripcionProducto:string;

    @IsNumber()
    precionProducto:number;

    @IsInt()
    @IsNumber()
    stock:number;

    @IsString()
    pathImg:string;

}