import { Get, Controller, Post, Body } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Observable } from 'rxjs';



@Controller('producto')
export class ProductoController {
  constructor(private readonly _productoService:ProductoService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._productoService.obtenerTodosProductos();


  }
  @Post('crear')
  async crear(
      @Body('nombre') nombre,
      @Body('correo') correo,
      @Body('password') password,
      @Body('rol') rol
  ) {

/*       const usuarioACrearse = crearUsuario(correo, password, nombre, rol)
      const arregloErrores = await validate(usuarioACrearse)
      const existenErrores = arregloErrores.length > 0
      console.log(arregloErrores) */
/*       if (existenErrores) {
          console.error('errores: creando al usuario', arregloErrores)
          throw new BadRequestException('Parametros incorrectos')
      }
      else { */
          return this._productoService.crear()
     //  }
  }

}