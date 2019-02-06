import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleOrdenProductoEntity } from "./detalle-orden-producto.entity";

@Injectable()
export class DetalleOrdenProductoService{
    constructor(
        @InjectRepository(DetalleOrdenProductoEntity)
    private readonly _detalleOrdenProductoRepository: Repository<DetalleOrdenProductoEntity>

    ){

    }
    async obtenerTodos() {
        return await this._detalleOrdenProductoRepository.find();
    }

}