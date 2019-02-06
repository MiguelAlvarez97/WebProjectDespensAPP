import { OrdenEntity } from './../orden/orden.entity';
import { UsuarioEntity } from './../usuario/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";


@Entity('usuario-orden')
export class UsuarioOrdenEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type => UsuarioEntity, usuario => usuario.id)
    usuario:UsuarioEntity[];

    @ManyToOne(type => OrdenEntity, orden => orden.id)
    orden:OrdenEntity[];

}