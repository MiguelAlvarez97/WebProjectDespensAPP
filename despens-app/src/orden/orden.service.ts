import { OrdenDto } from './orden-dto';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdenEntity } from "./orden.entity";
@Injectable()
export class OrdenService{
    constructor(
        @InjectRepository(OrdenEntity)
    private readonly _ordenRepository: Repository<OrdenEntity>

    ){

    }
    async obtenerTodasOrdenes() {
        return await this._ordenRepository.find();
    }

    async buscarPorId(id: number): Promise<OrdenEntity> {
        return await this._ordenRepository.findOne(id,{relations:["metodoPago"]});
    }

    async crear(orden: OrdenDto): Promise<OrdenEntity> {
        
        return await this._ordenRepository.save(orden)
    }

    async editar(id: number, orden: OrdenDto): Promise<OrdenEntity> {
        await this._ordenRepository.update(id, orden)
        return this.buscarPorId(id)
    }

    async eliminar(id: number): Promise<OrdenEntity> {
        const ordenEliminar = await this.buscarPorId(id)
        await this._ordenRepository.remove(ordenEliminar)
        return ordenEliminar
    }

}