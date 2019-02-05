import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('orden')
export class OrdenEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'date',name:'Fecha'})
    fecha:string;

}