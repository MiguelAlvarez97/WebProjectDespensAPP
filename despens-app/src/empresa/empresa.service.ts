import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresaEntity } from "./empresa.entity";

@Injectable()
export class EmpresaService{
    constructor(
        @InjectRepository(EmpresaEntity)
    private readonly _empresaRepository: Repository<EmpresaEntity>

    ){

    }
    async obtenerTodasEmpresas() {
        return await this._empresaRepository.find();
    }

}