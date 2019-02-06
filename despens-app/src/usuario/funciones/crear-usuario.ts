import { UsuarioCrearDto } from "../dto/usuario-crear-dto";


export function crearUsuario(correo: string, password:string, nombre:string, rol : string) :UsuarioCrearDto{
    const usuarioACrear = new UsuarioCrearDto()
    usuarioACrear.correoUsuairo=correo,
    usuarioACrear.password=password
    usuarioACrear.nombreUsuario=nombre
    usuarioACrear.rol= rol
    return usuarioACrear
}