import { TiendaProductoEntity } from './../tienda-producto/tienda-producto.entity';
import { EmpresaEntity } from './../empresa/empresa.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { EmptyError } from 'rxjs';

@Entity('tienda')
export class TiendaEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'DireccionTienda',length:40})
    direccionTienda:string;

    @Column({type:'varchar',name:'TelefonoTienda',length:10})
    telefonoTienda:string;

    @Column({type:'varchar',name:'NombreTienda',length:25})
    nombreTienda:string;

    @Column({type:'varchar',name:'PasswordTienda',length:8})
    passwordTienda:string;

    @ManyToOne(type => EmpresaEntity, empresa => empresa.id)
    empresa:EmpresaEntity[];

    @OneToMany(type => TiendaProductoEntity , tiendaProducto  => tiendaProducto.id)
    tiendaProducto:TiendaProductoEntity[];
}