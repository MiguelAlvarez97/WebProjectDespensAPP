import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('usuario')
export class UsuarioEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',name:'NombreUsuario',length:30})
    nombreUsuario:string;

    @Column({type:'varchar',name:'ApellidoUsuario',length:30})
    apellidoUsuario:string;

    @Column({type:'varchar',name:'TelefonoUsuario',length:30})
    telefonoUsuario:string;

    @Column({type:'varchar',name:'CorreoUsuario',length:40})
    correoUsuario:string;

}