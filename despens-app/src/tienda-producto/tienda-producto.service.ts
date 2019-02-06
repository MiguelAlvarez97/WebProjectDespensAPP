import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TiendaProductoEntity } from "./tienda-producto.entity";

@Injectable()
export class TiendaProductoService{
    constructor(
        @InjectRepository(TiendaProductoEntity)
    private readonly _tiendaProductoRepository: Repository<TiendaProductoEntity>

    ){

    }
    async obtenerTodos() {
        return await this._tiendaProductoRepository.find();
    }

}