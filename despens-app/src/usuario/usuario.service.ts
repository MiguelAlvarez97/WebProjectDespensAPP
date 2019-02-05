import { UsuarioEntity } from './usuario.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UsuarioService{
    constructor(
        @InjectRepository(UsuarioEntity)
    private readonly _usuarioRepository: Repository<UsuarioEntity>

    ){

    }
    async obtenerTodosUsuarios() {
        return await this._usuarioRepository.find();
    }

}