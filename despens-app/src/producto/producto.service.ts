import { ProductoEntity } from './producto.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoDto } from './producto-dto';

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

    async crear (producto: ProductoDto): Promise<ProductoEntity>{
        return await this._productoRepository.save(producto);
    }
}