import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MetodoPagoService } from './metodo-pago.service';


@Controller('metodo-pago')
export class MetodoPagoController {
  constructor(private readonly _metodoPagoService:MetodoPagoService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._metodoPagoService.obtenerTodosMetodosPagos();
  }

}
