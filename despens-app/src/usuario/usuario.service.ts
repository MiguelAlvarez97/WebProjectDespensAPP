import { UsuarioEntity } from './usuario.entity';
import { Injectable } from "@nestjs/common";
import { Repository, FindOneOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioCrearDto } from './dto/usuario-crear-dto';
import { UsuarioEditarDto } from './dto/usuario-editar-dto';
@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly _usuarioRepository: Repository<UsuarioEntity>

    ) {

    }
    async obtenerTodosUsuarios() {
        return await this._usuarioRepository.find({ relations: ["empresa"] });
    }

    async obtenerPorNombre(nombreUsuario: string): Promise<UsuarioEntity> {
        const opciones: FindOneOptions = {
            where: {
                nombreUsuario
            }
        };
        const usuarioEncontrado = this._usuarioRepository.findOne(opciones)
        return usuarioEncontrado

    }

    async buscarPorId(id: number): Promise<UsuarioEntity> {
        return await this._usuarioRepository.findOne(id, { relations: ["empresa"] })
    }

    async buscarPorEmail(correoUsuario: string): Promise<UsuarioEntity> {
        const opciones: FindOneOptions = {
            where: {
                correoUsuario
            }
        }
        const usuarioEncontrado = this._usuarioRepository.findOne(undefined, opciones)
        return usuarioEncontrado
    }


    async crear(usuario: UsuarioCrearDto): Promise<UsuarioEntity> {
        let usuarioCreado = await this._usuarioRepository.create(usuario)
        return await this._usuarioRepository.save(usuarioCreado)
    }

    async editar(id: number, usuario: UsuarioEditarDto): Promise<UsuarioEntity> {
        await this._usuarioRepository.update(id, usuario)
        return this.buscarPorId(id)
    }

    async eliminar(id: number): Promise<UsuarioEntity> {
        let usuarioAEliminar = await this.buscarPorId(id)
        await this._usuarioRepository.remove(usuarioAEliminar)
        return usuarioAEliminar
    }

    async  query(consulta: object): Promise<UsuarioEntity[]> {

        return await (this._usuarioRepository.find({
            order: {
                id: 'DESC'
            },
            where: consulta
        }))
    }

}