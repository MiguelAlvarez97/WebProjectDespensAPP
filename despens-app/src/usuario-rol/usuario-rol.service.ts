import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioRolEntity } from "./usuario-rol.entity";

@Injectable()
export class UsuarioRolService{
    constructor(
        @InjectRepository(UsuarioRolEntity)
    private readonly _usuarioRolRepository: Repository<UsuarioRolEntity>

    ){

    }
    async obtenerTodos() {
        return await this._usuarioRolRepository.find();
    }

}