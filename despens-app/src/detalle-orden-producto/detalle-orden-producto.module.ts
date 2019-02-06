import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleOrdenProductoEntity } from './detalle-orden-producto.entity';
import { DetalleOrdenProductoController } from './detalle-orden-producto.controller';
import { DetalleOrdenProductoService } from './detalle-orden-producto.service';

@Module({
    imports:[TypeOrmModule.forFeature(
        [DetalleOrdenProductoEntity])],
    providers:[DetalleOrdenProductoService],
    controllers:[DetalleOrdenProductoController]
})
export class DetalleOrdenProductoModule {}
