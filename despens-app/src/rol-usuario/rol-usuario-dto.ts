import { IsString } from "class-validator";

export class RolUsuarioDto{
    @IsString()
    nombreRol:string;
}