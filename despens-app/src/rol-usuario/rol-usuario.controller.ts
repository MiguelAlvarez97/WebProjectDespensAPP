import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RolUsuarioService } from './rol-usuario.service';


@Controller('rol-usuario')
export class RolUsuarioController {
  constructor(private readonly _rolUsuarioService:RolUsuarioService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._rolUsuarioService.obtenerTodosRoles();
  }

}
