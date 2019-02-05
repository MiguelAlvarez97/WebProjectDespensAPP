import {IsString}from 'class-validator';

export class TiendaDto{
    
    @IsString()
    direccionTienda:string;

    @IsString()
    telefonoTienda:string;

    @IsString()
    nombreTienda:string;

    @IsString()
    passwordTienda:string;
}