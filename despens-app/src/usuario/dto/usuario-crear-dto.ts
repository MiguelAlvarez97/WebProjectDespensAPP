import { IsString, IsEmail, IsNotEmpty, Matches } from "class-validator";

export class UsuarioCrearDto{
    
   
    @IsNotEmpty()
    @IsString()
    nombreUsuario:string;

    @IsNotEmpty()
    @IsString()
    apellidoUsuario:string;

    @IsNotEmpty()
    @IsString()
    telefonoUsuario?:string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    correoUsuairo:string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)
    password: string

    @IsNotEmpty()
    @IsString()
    rol:string

}