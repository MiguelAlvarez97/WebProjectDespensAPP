import { DetalleOrdenController } from './detalle-orden.controller';
import { DetalleOrdenService } from './detalle-orden.service';
import { Module } from '@nestjs/common';
import { DetalleOrdenEntity } from './detalle-orden.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature(
        [DetalleOrdenEntity])],
    providers:[DetalleOrdenService],
    controllers:[DetalleOrdenController]
})
export class DetalleOrdenModule {

}
