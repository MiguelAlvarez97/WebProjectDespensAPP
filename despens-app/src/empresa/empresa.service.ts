import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EmpresaEntity } from "./empresa.entity";
import { EmpresaDto } from "./empresa-dto";

@Injectable()
export class EmpresaService {
    constructor(
        @InjectRepository(EmpresaEntity)
        private readonly _empresaRepository: Repository<EmpresaEntity>

    ) {

    }
    async obtenerTodasEmpresas() {
        return await this._empresaRepository.find();
    }

    async buscarPorId(id: number): Promise<EmpresaEntity> {
        return await this._empresaRepository.findOne(id);
    }

    async crear(empresa: EmpresaDto): Promise<EmpresaEntity> {

        return await this._empresaRepository.save(empresa)
    }

    async editar(id: number, empresa: EmpresaDto): Promise<EmpresaEntity> {
        await this._empresaRepository.update(id, empresa)
        return this.buscarPorId(id)
    }

    async eliminar(id: number): Promise<EmpresaEntity> {
        const empresaEliminar = await this.buscarPorId(id)
        await this._empresaRepository.remove(empresaEliminar)
        return empresaEliminar
    }

}