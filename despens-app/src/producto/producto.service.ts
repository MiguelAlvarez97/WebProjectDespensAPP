import { ProductoEntity } from './producto.entity';
import { Injectable } from "@nestjs/common";
import { Repository, FindOneOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoDto } from './producto-dto';

@Injectable()
export class ProductoService{
    constructor(
        @InjectRepository(ProductoEntity)
    private readonly _productoRepository: Repository<ProductoEntity>

    ){

    }

    async obtenerTodosProductos(): Promise<ProductoEntity[]> {
        return await this._productoRepository.find();
    }

    async obtenerPorNombre(nombreProducto: string): Promise<ProductoEntity> {
        const opciones: FindOneOptions = {
            where: {
                nombreProducto
            }
        };
        const productoEncontrado = this._productoRepository.findOne(opciones)
        return productoEncontrado

    }


    async buscarPorId (id: number): Promise<ProductoEntity>{
        console.log(await this._productoRepository.findOne(id))
        return await this._productoRepository.findOne(id)
    }

    async crear (producto: ProductoDto): Promise<ProductoEntity>{
        return await this._productoRepository.save(producto);
    }

    async editar(id: number, producto: ProductoDto): Promise<ProductoEntity>{
        await this._productoRepository.update(id, producto)
        return this.buscarPorId(id)
    }
    async eliminar(id:number){

        return await this._productoRepository.delete(id);
    }

}