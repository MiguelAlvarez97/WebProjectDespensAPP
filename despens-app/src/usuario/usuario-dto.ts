import { IsString, IsEmail } from "class-validator";

export class UsuarioDto{
    
    @IsString()
    nombreUsuario:string;

    @IsString()
    apellidoUsuario:string;

    @IsString()
    telefonoUsuario:string;

    @IsString()
    @IsEmail()
    correoUsuairo:string;


}