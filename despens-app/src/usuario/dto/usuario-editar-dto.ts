import { IsString, IsEmail, IsNotEmpty, Matches, IsOptional } from "class-validator";

export class UsuarioEditarDto{
    
   
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    nombreUsuario?:string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    apellidoUsuario?:string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    telefonoUsuario?:string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @IsOptional()
    correoUsuairo?:string;


    @IsNotEmpty()
    @IsString()
    @IsOptional()
    rol:string

}