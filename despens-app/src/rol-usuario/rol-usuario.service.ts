import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RolUsuarioEntity } from "./rol-usuario.entity";

@Injectable()
export class RolUsuarioService{
    constructor(
        @InjectRepository(RolUsuarioEntity)
    private readonly _rolUsuarioRepository: Repository<RolUsuarioEntity>

    ){

    }
    async obtenerTodosRoles() {
        return await this._rolUsuarioRepository.find();
    }

}