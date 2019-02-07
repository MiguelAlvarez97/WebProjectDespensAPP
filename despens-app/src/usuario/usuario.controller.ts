import { UsuarioService } from './usuario.service';
import { Get, Controller, Param, Body, BadRequestException, Put, Delete, Query, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsuarioEntity } from './usuario.entity';
import { validate } from 'class-validator';
import { UsuarioEditarDto } from './dto/usuario-editar-dto';
import { crearUsuario } from './funciones/crear-usuario';
import { editarUsuario } from './funciones/editarUsuario';
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly _usuarioService:UsuarioService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._usuarioService.obtenerTodosUsuarios();
  }

  @Get('listar/:id')
    async obtenerUno(
        @Param('id') id
    ): Promise<UsuarioEntity> {
        return await this._usuarioService.buscarPorId(id);
    }

    @Post('buscar')
    async buscar(@Body('nombreUsuario') nombreUsuario){
        console.log('sdfasdfsdf',nombreUsuario);
        return  await this._usuarioService.obtenerPorNombre(nombreUsuario);
    }

    @Post('crear')
    async crear(
        @Body() usuario
    ) {

        const usuarioACrearse = crearUsuario(usuario);
        const arregloErrores = await validate(usuarioACrearse);
        const existenErrores = arregloErrores.length > 0
        console.log(arregloErrores);
        if (existenErrores) {
            console.error('errores: creando al usuario', arregloErrores);
            throw new BadRequestException('Parametros incorrectos')
        }
        else {
            return this._usuarioService.crear(usuarioACrearse);
        }
    }

    @Post('editar/:id')
    async  editar(
        @Param() id: number,
        @Body() usuario: UsuarioEditarDto
    ): Promise<UsuarioEntity> {
        const usuarioAEditarse = editarUsuario(usuario);
        const arregloErrores = await validate(usuarioAEditarse);
        const existenErrores = arregloErrores.length > 0
        console.log('errores', arregloErrores);
        if (existenErrores) {
            console.error('errores editando al usuario', arregloErrores);
            throw new BadRequestException('Parametros incorrectos');
        }
        else {
            return this._usuarioService.editar(id, usuarioAEditarse);
        }
    }

    @Post('eliminar/:id')
    eliminar(
        @Param('id') id: number
    ) {
        console.log(id);
        return this._usuarioService.eliminar(id);
    }

    @Get()
    async  buscarQuery(
        @Query() query: object
    ): Promise<UsuarioEntity[]> {
        return await this._usuarioService.query(query);
    }
}
