import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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


}