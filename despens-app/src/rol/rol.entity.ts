import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UsuarioRolEntity } from "src/usuario-rol/usuario-rol.entity";


@Entity('rol')
export class RolEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'NombreRol',length:30})
    nombreRol:string;

    @OneToMany(type => UsuarioRolEntity, usuarioRol => usuarioRol.id)
    usuarioRol:UsuarioRolEntity[];
}