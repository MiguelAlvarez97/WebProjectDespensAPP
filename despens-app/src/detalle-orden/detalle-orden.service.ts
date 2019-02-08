import { DetallOrdenDto } from './detalle-orden-dto';
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

    async buscarPorId(id: number): Promise<DetalleOrdenEntity> {
        return await this._detalleOrdenRepository.findOne(id,{relations:["ordenes"]});
    }

    async crear(detalleOrden: DetallOrdenDto): Promise<DetalleOrdenEntity> {
        
        return await this._detalleOrdenRepository.save(detalleOrden)
    }

    async editar(id: number, detalleOrden: DetallOrdenDto): Promise<DetalleOrdenEntity> {
        await this._detalleOrdenRepository.update(id, detalleOrden)
        return this.buscarPorId(id)
    }

    async eliminar(id: number): Promise<DetalleOrdenEntity> {
        const detalleOrdenEliminar = await this.buscarPorId(id)
        await this._detalleOrdenRepository.remove(detalleOrdenEliminar)
        return detalleOrdenEliminar
    }
}