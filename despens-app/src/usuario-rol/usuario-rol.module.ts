import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioRolEntity } from './usuario-rol.entity';
import { UsuarioRolController } from './usuario-rol.controller';
import { UsuarioRolService } from './usuario-rol.service';

@Module({
    imports:[TypeOrmModule.forFeature(
        [UsuarioRolEntity])],
    providers:[UsuarioRolService],
    controllers:[UsuarioRolController]
})
export class UsuarioOrdenModule {}
