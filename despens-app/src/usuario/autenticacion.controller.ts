import { Controller, Body, BadRequestException, Post } from '@nestjs/common';
import { validate } from 'class-validator';
import { UsuarioService } from './usuario.service';
import { generarUsuarioLogin } from './funciones/generar-usuario-login';
import { AdvancedConsoleLogger } from 'typeorm';
@Controller('usuario')
export class AutenticacionController {
    constructor(private readonly _usuarioService: UsuarioService) { }
    @Post('login')
    async autentificar(
        @Body('correoUsuario') correoUsuario ,
        @Body('password') password
    ){
        const usuarioALoguearse = generarUsuarioLogin(correoUsuario, password)
        const arregloErrores = await validate(usuarioALoguearse)
        const existenErrores = arregloErrores.length > 0
        console.log(arregloErrores)
        if(existenErrores){
            console.error('errores: logueando al usuario',arregloErrores)
            throw new BadRequestException('Parametros inocrrectos')
        }
        else{
            console.log(usuarioALoguearse.correoUsuario);
            const usuarioEncontrado= await this._usuarioService.buscarPorEmail(usuarioALoguearse.correoUsuario)
            if(usuarioEncontrado){
                const esPasswordCorrecto = usuarioEncontrado.password == usuarioALoguearse.password 
                if(esPasswordCorrecto){
                    return usuarioEncontrado
                }
                else{
                    console.error('intento fallido:  paassword incorrecto', usuarioALoguearse.password)
                    throw new BadRequestException('error loguin')
                }
            }
            else{
                console.error('intento fallido:  no existe usuario', usuarioALoguearse)
                throw new BadRequestException('error loguin')

            }
            }
            
           
    }
    @Post('restablecerContrasenia')
     async restablecerContraseña(
        @Body('actualizacion') actualizacion,
        @Body('correo') correo
    ) {
        console.log('llega',actualizacion,correo)
        const idUsuarioEncontrado = this._usuarioService.buscarPorEmail(correo)
        idUsuarioEncontrado.then(respuesta => {
            respuesta.id
            console.log('se actualizo',actualizacion,correo)
            return this._usuarioService.editar(respuesta.id, actualizacion)
        }).
            catch(error => {
                return console.log(error, ' al restablecer contraseña')
            })
    }
}
