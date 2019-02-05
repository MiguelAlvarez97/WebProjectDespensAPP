import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetodoPagoEntity } from './metodo-pago.entity';
import { MetodoPagoService } from './metodo-pago.service';
import { MetodoPagoController } from './metodo-pago.controller';

@Module({
    imports:[TypeOrmModule.forFeature(
        [MetodoPagoEntity])],
    providers:[MetodoPagoService],
    controllers:[MetodoPagoController]
})
export class MetodoPagoModule {}
