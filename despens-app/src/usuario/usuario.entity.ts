import { UsuarioRolEntity } from './../usuario-rol/usuario-rol.entity';
import { UsuarioOrdenEntity } from './../usuario-orden/usuario-orden.entity';
import { EmpresaEntity } from './../empresa/empresa.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'NombreUsuario',length:30})
    nombreUsuario:string;

    @Column({type:'varchar',name:'ApellidoUsuario',length:30})
    apellidoUsuario:string;

    @Column({type:'varchar',name:'TelefonoUsuario',length:30})
    telefonoUsuario:string;

    @Column({type:'varchar',name:'CorreoUsuario',length:40})
    correoUsuario:string;

    @ManyToOne(type => EmpresaEntity, empresa => empresa.id)
    empresa: EmpresaEntity[];

    @OneToMany(type => UsuarioOrdenEntity, usuarioOrden => usuarioOrden.id)
    usuarioOrden:UsuarioOrdenEntity[];

    @OneToMany(type => UsuarioRolEntity, usuarioRol => usuarioRol.id)
    usuarioRol:UsuarioRolEntity[];
    
}