import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TipoproductoService } from './tipo-producto.service';


@Controller('tipo-producto')
export class TipoProductoController {
  constructor(private readonly _tipoProductoService:TipoproductoService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._tipoProductoService.obtenerTodosTipoProducto();
  }

}
