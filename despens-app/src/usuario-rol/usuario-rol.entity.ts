import { UsuarioEntity } from './../usuario/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { RolEntity } from "src/rol/rol.entity";


@Entity('usuario-rol')
export class UsuarioRolEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type => RolEntity, rol => rol.id)
    rol:RolEntity[];

    @ManyToOne(type => UsuarioEntity, usuario => usuario.id)
    usuario:UsuarioEntity[];
}