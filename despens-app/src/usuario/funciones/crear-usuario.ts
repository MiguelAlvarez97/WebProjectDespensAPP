import { RolController } from './../../rol/rol.controller';
import { UsuarioCrearDto } from "../dto/usuario-crear-dto";


export function crearUsuario(usuario): UsuarioCrearDto {
    const usuarioACrear = new UsuarioCrearDto()
    usuarioACrear.nombreUsuario = usuario.nombreUsuario,
        usuarioACrear.apellidoUsuario = usuario.apellidoUsuario,
        usuarioACrear.correoUsuario = usuario.correoUsuario,
        usuarioACrear.password = usuario.password,
        usuarioACrear.telefonoUsuario = usuario.telefonoUsuario,
        usuarioACrear.rol = usuario.rol
    return usuarioACrear
}