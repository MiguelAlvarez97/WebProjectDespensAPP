import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoProductoEntity } from './tipo-producto.entity';
import { TipoproductoService } from './tipo-producto.service';
import { TipoProductoController } from './tipo-producto.controller';

@Module({
    imports:[TypeOrmModule.forFeature(
        [TipoProductoEntity])],
    providers:[TipoproductoService],
    controllers:[TipoProductoController]
})
export class TipoProductoModule {}
