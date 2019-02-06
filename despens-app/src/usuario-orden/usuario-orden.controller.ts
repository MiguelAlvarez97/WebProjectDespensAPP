import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsuarioOrdenService } from './usuario-orden.service';


@Controller('usuario-orden')
export class UsuarioOrdenController {
  constructor(private readonly _usuarioOrdenService:UsuarioOrdenService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._usuarioOrdenService.obtenerTodos();
  }

}
