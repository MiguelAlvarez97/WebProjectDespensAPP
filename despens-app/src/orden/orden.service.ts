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

}