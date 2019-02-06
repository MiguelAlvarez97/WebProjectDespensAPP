import { UsuarioLoginDto } from "../dto/usuario-login-dto";

export function generarUsuarioLogin(usuario: string, password:string) :UsuarioLoginDto{
    const usuarioLogin = new UsuarioLoginDto()
        usuarioLogin.usuario=usuario,
        usuarioLogin.password=password
    return usuarioLogin
}