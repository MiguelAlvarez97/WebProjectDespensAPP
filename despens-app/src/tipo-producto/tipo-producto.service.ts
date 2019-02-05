import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoProductoEntity } from "./tipo-producto.entity";

@Injectable()
export class TipoproductoService{
    constructor(
        @InjectRepository(TipoProductoEntity)
    private readonly _tipoProductoRepository: Repository<TipoProductoEntity>

    ){

    }
    async obtenerTodosTipoProducto() {
        return await this._tipoProductoRepository.find();
    }

}