import { UsuarioOrdenEntity } from './../usuario-orden/usuario-orden.entity';
import { DetalleOrdenEntity } from './../detalle-orden/detalle-orden.entity';
import { MetodoPagoEntity } from './../metodo-pago/metodo-pago.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";

@Entity('orden')
export class OrdenEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'date',name:'Fecha'})
    fecha:string;

    @ManyToOne(type => MetodoPagoEntity, metodoPago => metodoPago.id)
    metodoPago: MetodoPagoEntity[];

    @OneToMany(type => DetalleOrdenEntity, detalleOrden =>detalleOrden.id)
    detalleOrden:DetalleOrdenEntity[];

    @OneToMany(type => UsuarioOrdenEntity, usuarioOrden => usuarioOrden.id)
    usuarioOrden:UsuarioOrdenEntity[];
}