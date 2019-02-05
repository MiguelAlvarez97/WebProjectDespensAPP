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

}