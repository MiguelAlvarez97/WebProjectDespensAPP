import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendaProductoEntity } from './tienda-producto.entity';
import { TiendaProductoController } from './tienda-producto.controller';
import { TiendaProductoService } from './tienda-producto.service';

@Module({
    imports:[TypeOrmModule.forFeature(
        [TiendaProductoEntity])],
    providers:[TiendaProductoService],
    controllers:[TiendaProductoController]
})
export class TiendaProductoModule {}
