import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TiendaService } from './tienda.service';



@Controller('tienda')
export class TiendaController {
  constructor(private readonly _tiendaService:TiendaService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._tiendaService.obtenerTodasTiendas();
  }

}
