import { UsuarioEditarDto } from "../dto/usuario-editar-dto";

export function editarUsuario(usuario: UsuarioEditarDto) :UsuarioEditarDto{
    var usuarioEditar = new UsuarioEditarDto()
    Object.keys(usuario).map(atributo=>{
        usuarioEditar[atributo]=usuario[atributo]
    })
    return usuarioEditar
}