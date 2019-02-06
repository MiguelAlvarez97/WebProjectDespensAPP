import { ProductoEntity } from './../producto/producto.entity';
import { DetalleOrdenEntity } from './../detalle-orden/detalle-orden.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";


@Entity('detalle-orden-producto')
export class DetalleOrdenProductoEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type => DetalleOrdenEntity, detalleOrden => detalleOrden.id)
    detalleOrden:DetalleOrdenEntity[];

    @ManyToOne(type => ProductoEntity, producto => producto.id)
    producto:ProductoEntity[];
}