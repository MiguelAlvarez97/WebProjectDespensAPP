import { Get, Controller } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { Observable } from 'rxjs';
import { EmpresaEntity } from './empresa.entity';


@Controller('empresa')
export class EmpresaController {
  constructor(private readonly _empresaService:EmpresaService ) {}

  @Get('listar')
  async obtenerTodos(){
     
      return await this._empresaService.obtenerTodasEmpresas();
  }

}
