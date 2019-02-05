import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

}