import { UsuarioLoginDto } from "../dto/usuario-login-dto";

export function generarUsuarioLogin(correoUsuario: string, password:string) :UsuarioLoginDto{
    const usuarioLogin = new UsuarioLoginDto()
        usuarioLogin.correoUsuario=correoUsuario,
        usuarioLogin.password=password
    return usuarioLogin
}