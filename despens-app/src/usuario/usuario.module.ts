import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { UsuarioEntity } from './usuario.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature(
        [UsuarioEntity])],
    providers:[UsuarioService],
    controllers:[UsuarioController]
})
export class UsuarioModule {}
