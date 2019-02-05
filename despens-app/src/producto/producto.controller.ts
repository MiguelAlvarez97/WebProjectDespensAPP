import { Get, Controller } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Observable } from 'rxjs';



@Controller('producto')
export class ProductoController {
  constructor(private readonly _productoService:ProductoService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._productoService.obtenerTodosProductos();
  }

}