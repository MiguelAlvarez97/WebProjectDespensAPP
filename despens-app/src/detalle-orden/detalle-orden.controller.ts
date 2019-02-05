import { DetalleOrdenService } from './detalle-orden.service';
import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';



@Controller('detalle-orden')
export class DetalleOrdenController {
  constructor(private readonly _detalleOrdenService:DetalleOrdenService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._detalleOrdenService.obtenerTodosDetalleOrden();
  }

}
