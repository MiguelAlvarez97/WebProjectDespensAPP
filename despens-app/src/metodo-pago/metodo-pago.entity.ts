import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('metodo-pago')
export class MetodoPagoEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'MetodoDePago',length:25})
    metodoPago:string;

}