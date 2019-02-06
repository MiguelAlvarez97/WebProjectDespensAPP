import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TiendaProductoService } from './tienda-producto.service';


@Controller('tienda-producto')
export class TiendaProductoController {
  constructor(private readonly _tiendaProductoService:TiendaProductoService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._tiendaProductoService.obtenerTodos();
  }

}
