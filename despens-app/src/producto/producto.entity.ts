import { TipoProducto } from './../tipo-producto/tipo-producto-dto';
import { TipoProductoEntity } from './../tipo-producto/tipo-producto.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { DetalleOrdenProductoEntity } from 'src/detalle-orden-producto/detalle-orden-producto.entity';
import { TiendaProductoEntity } from 'src/tienda-producto/tienda-producto.entity';

@Entity('producto')
export class ProductoEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'NombreProducto',length:25})
    nombreProducto:string;

    @Column({type:'varchar',name:'DescripcionProducto',length:100})
    descripcionProducto:string;

    @Column({type:'float',name:'PrecioProducto'})
    precioProducto:number;

    @Column({type:'int',name:'Stock'})
    stock:number;

    @Column({type:'varchar',name:'PathImg',length:60})
    pathImg:string;

    @ManyToOne(type => TipoProductoEntity, tipoProducto => tipoProducto.id)
    TipoProducto: TipoProductoEntity[];

    @OneToMany(type => DetalleOrdenProductoEntity, detalleOrdenProducto => detalleOrdenProducto.id)
    detalleOrdenProducto:DetalleOrdenProductoEntity[];
    
    @OneToMany(type => TiendaProductoEntity , tiendaProducto  => tiendaProducto.id)
    tiendaProducto:TiendaProductoEntity[];

}