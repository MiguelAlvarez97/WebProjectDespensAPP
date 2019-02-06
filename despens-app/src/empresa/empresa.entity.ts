import { UsuarioEntity } from './../usuario/usuario.entity';
import { TiendaEntity } from './../tienda/tienda.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('empresa')
export class EmpresaEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'NombreEmpresa',length:30})
    nombreEmpresa:string;

    @OneToMany(type =>  TiendaEntity, tienda => tienda.id)
    tienda: TiendaEntity[];   
    
    @OneToMany(type => UsuarioEntity, usuario => usuario.id)
    usuario: UsuarioEntity[];

    

}