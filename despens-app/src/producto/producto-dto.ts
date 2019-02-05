import { IsString, IsNumber, IsInt } from "class-validator";

export class ProductoDto{
    
    @IsString()
    nombreProducto:string;

    @IsString()
    descripcionProducto:string;

    @IsNumber()
    precionProducto:string;

    @IsInt()
    @IsNumber()
    stock:string;

    @IsString()
    pathImg:string;

}