import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './usuario.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutenticacionController } from './autenticacion.controller';

@Module({
    imports:[TypeOrmModule.forFeature(
        [UsuarioEntity])],
    providers:[UsuarioService],
    controllers:[UsuarioController,AutenticacionController]
})
export class UsuarioModule {}
