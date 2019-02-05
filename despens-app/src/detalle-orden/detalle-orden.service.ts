import { DetalleOrdenEntity } from './detalle-orden.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class DetalleOrdenService{
    constructor(
        @InjectRepository(DetalleOrdenEntity)
    private readonly _detalleOrdenRepository: Repository<DetalleOrdenEntity>

    ){

    }
    async obtenerTodosDetalleOrden() {
        return await this._detalleOrdenRepository.find();
    }

}