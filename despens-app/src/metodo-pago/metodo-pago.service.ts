import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MetodoPagoEntity } from "./metodo-pago.entity";

@Injectable()
export class MetodoPagoService{
    constructor(
        @InjectRepository(MetodoPagoEntity)
    private readonly _metodoPagoRepository: Repository<MetodoPagoEntity>

    ){

    }
    async obtenerTodosMetodosPagos() {
        return await this._metodoPagoRepository.find();
    }

}