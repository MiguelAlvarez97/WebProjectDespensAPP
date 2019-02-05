import {IsString}from 'class-validator';

export class UsuarioDto{
    
    @IsString()
    nombreEmpresa:string;
    


}
