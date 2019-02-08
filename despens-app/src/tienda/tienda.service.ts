import { TiendaDto } from './tienda-dto';
import { TiendaEntity } from './tienda.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TiendaService{
    constructor(
        @InjectRepository(TiendaEntity)
    private readonly _tiendaRepository: Repository<TiendaEntity>

    ){

    }
    async obtenerTodasTiendas() {
        return await this._tiendaRepository.find();
    }
    async buscarPorId(id: number): Promise<TiendaEntity> {
        return await this._tiendaRepository.findOne(id,{relations:["empresa"]});
    }

    async crear(tienda: TiendaDto): Promise<TiendaEntity> {
        
        return await this._tiendaRepository.save(tienda)
    }

    async editar(id: number, tienda: TiendaDto): Promise<TiendaEntity> {
        await this._tiendaRepository.update(id, tienda)
        return this.buscarPorId(id)
    }

    async eliminar(id: number): Promise<TiendaEntity> {
        const tiendaAEliminar = await this.buscarPorId(id)
        await this._tiendaRepository.remove(tiendaAEliminar)
        return tiendaAEliminar
    }


}