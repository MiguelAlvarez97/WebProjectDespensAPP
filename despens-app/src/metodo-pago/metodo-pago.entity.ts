import { OrdenEntity } from './../orden/orden.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity('metodo-pago')
export class MetodoPagoEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'MetodoDePago',length:25})
    metodoPago:string;

    @OneToMany(type => OrdenEntity, orden => orden.id )
    orden:OrdenEntity[];
}