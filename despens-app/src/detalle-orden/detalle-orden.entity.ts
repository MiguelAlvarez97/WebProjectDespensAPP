import { DetalleOrdenProductoEntity } from './../detalle-orden-producto/detalle-orden-producto.entity';
import { OrdenEntity } from './../orden/orden.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity('detalle-orden')
export class DetalleOrdenEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'int',name:'CantidadOrden'})
    cantidadOrden:number;

    @Column({type:'float',name:'PrecioUnit'})
    precioUnit:number;

    @Column({type:'float',name:'PrecioTotal'})
    precioTotal:number;

    @ManyToOne(type => OrdenEntity, orden => orden.id)
    orden:OrdenEntity[];

    @OneToMany(type => DetalleOrdenProductoEntity, detalleOrdenProducto => detalleOrdenProducto.id)
    detalleOrdenProducto:DetalleOrdenProductoEntity[];

}