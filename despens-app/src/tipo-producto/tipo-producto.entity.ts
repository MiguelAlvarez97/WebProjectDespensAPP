import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tipo-producto')
export class TipoProductoEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'TipoProducto',length:25})
    tipoProducto:string;

}