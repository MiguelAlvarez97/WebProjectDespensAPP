import { OrdenController } from './orden.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenEntity } from './orden.entity';
import { OrdenService } from './orden.service';

@Module({
    imports:[TypeOrmModule.forFeature(
        [OrdenEntity])],
    providers:[OrdenService],
    controllers:[OrdenController]
})
export class OrdenModule {}
