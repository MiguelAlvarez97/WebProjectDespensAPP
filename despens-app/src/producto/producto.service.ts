import { ProductoEntity } from './producto.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductoService{
    constructor(
        @InjectRepository(ProductoEntity)
    private readonly _productoRepository: Repository<ProductoEntity>

    ){

    }
    async obtenerTodosProductos() {
        return await this._productoRepository.find();
    }

}