import { ProductoEntity } from './../producto/producto.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('tipo-producto')
export class TipoProductoEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'TipoProducto',length:25})
    tipoProducto:string;

    @OneToMany(type => ProductoEntity, producto => producto.id)
    producto:ProductoEntity[];
}