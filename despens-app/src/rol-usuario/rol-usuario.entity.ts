import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity('rol-usuario')
export class RolUsuarioEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'NombreRol',length:30})
    nombreRol:string;

}