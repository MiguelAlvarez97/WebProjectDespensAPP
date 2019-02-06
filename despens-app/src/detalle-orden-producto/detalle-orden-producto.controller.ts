import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DetalleOrdenProductoService } from './detalle-orden-producto.service';


@Controller('detalle-orden-producto')
export class DetalleOrdenProductoController {
  constructor(private readonly detalleOrdenProductoService:DetalleOrdenProductoService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this.detalleOrdenProductoService.obtenerTodos();
  }

}
