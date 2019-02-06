import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioOrdenEntity } from './usuario-orden.entity';
import { UsuarioOrdenController } from './usuario-orden.controller';
import { UsuarioOrdenService } from './usuario-orden.service';

@Module({
    imports:[TypeOrmModule.forFeature(
        [UsuarioOrdenEntity])],
    providers:[UsuarioOrdenService],
    controllers:[UsuarioOrdenController]
})
export class UsuarioRolModule {}
