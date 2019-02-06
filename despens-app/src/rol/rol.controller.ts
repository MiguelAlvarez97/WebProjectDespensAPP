import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RolService } from './rol.service';


@Controller('rol')
export class RolController {
  constructor(private readonly _rolService:RolService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._rolService.obtenerTodosRoles();
  }

}
