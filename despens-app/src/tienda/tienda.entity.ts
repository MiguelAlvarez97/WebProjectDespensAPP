import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tienda')
export class TiendaEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'DireccionTienda',length:40})
    direccionTienda:string;

    @Column({type:'varchar',name:'TelefonoTienda',length:10})
    telefonoTienda:string;

    @Column({type:'varchar',name:'NombreTienda',length:25})
    nombreTienda:string;

    @Column({type:'varchar',name:'PasswordTienda',length:8})
    passwordTienda:string;

}