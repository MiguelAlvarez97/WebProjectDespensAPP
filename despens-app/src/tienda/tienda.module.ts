import { TiendaController } from './tienda.controller';
import { TiendaService } from './tienda.service';
import { TiendaEntity } from './tienda.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature(
        [TiendaEntity])],
    providers:[TiendaService],
    controllers:[TiendaController]
})

export class TiendaModule {}
