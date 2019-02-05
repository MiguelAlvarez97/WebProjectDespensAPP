import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { OrdenService } from './orden.service';



@Controller('orden')
export class OrdenController {
  constructor(private readonly _ordenService:OrdenService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._ordenService.obtenerTodasOrdenes();
  }

}
