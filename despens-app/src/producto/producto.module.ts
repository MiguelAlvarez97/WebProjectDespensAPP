import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { ProductoEntity } from './producto.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature(
        [ProductoEntity])],
    providers:[ProductoService],
    controllers:[ProductoController]
})
export class ProductoModule {}
