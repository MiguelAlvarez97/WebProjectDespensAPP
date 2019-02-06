import { TiendaEntity } from './../tienda/tienda.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ProductoEntity } from "src/producto/producto.entity";


@Entity('tienda-producto')
export class TiendaProductoEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(type => ProductoEntity, producto => producto.id)
    producto:ProductoEntity[];

    @ManyToOne(type => TiendaEntity, tienda => tienda.id)
    tienda:TiendaEntity[];


}