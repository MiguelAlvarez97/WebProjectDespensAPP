import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioOrdenEntity } from "./usuario-orden.entity";

@Injectable()
export class UsuarioOrdenService{
    constructor(
        @InjectRepository(UsuarioOrdenEntity)
    private readonly _usuarioOrdenRepository: Repository<UsuarioOrdenEntity>

    ){

    }
    async obtenerTodos() {
        return await this._usuarioOrdenRepository.find();
    }

}