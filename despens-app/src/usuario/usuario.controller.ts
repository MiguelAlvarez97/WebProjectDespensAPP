import { UsuarioService } from './usuario.service';
import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly _usuarioService:UsuarioService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._usuarioService.obtenerTodosUsuarios();
  }

}
