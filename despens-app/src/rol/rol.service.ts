import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RolEntity } from "./rol.entity";

@Injectable()
export class RolService{
    constructor(
        @InjectRepository(RolEntity)
    private readonly _rolRepository: Repository<RolEntity>

    ){

    }
    async obtenerTodosRoles() {
        return await this._rolRepository.find();
    }

}