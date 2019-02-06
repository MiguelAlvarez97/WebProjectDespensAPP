import {IsNotEmpty, IsEmail, Matches, IsString} from 'class-validator'
export class UsuarioLoginDto{
    @IsNotEmpty()
    @IsEmail()
    usuario: string

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)
    password: string
}