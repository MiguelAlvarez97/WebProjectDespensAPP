import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('empresa')
export class EmpresaEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'NombreEmpresa',length:30})
    nombreEmpresa:string;

}