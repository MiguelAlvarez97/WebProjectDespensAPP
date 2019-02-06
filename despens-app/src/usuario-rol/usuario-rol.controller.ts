import { Get, Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsuarioRolService } from './usuario-rol.service';


@Controller('usuario-rol')
export class UsuarioRolController {
  constructor(private readonly _usuarioRolService:UsuarioRolService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._usuarioRolService.obtenerTodos();
  }

}
