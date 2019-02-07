import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { TiendaModule } from './tienda/tienda.module';
import { ProductoModule } from './producto/producto.module';
import { OrdenModule } from './orden/orden.module';
import { DetalleOrdenModule } from './detalle-orden/detalle-orden.module';
import { TipoProductoModule } from './tipo-producto/tipo-producto.module';
import { MetodoPagoModule } from './metodo-pago/metodo-pago.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { UsuarioRolModule } from './usuario-orden/usuario-orden.module';
import { UsuarioOrdenModule } from './usuario-rol/usuario-rol.module';
import { TiendaProductoModule } from './tienda-producto/tienda-producto.module';
import { DetalleOrdenProductoModule } from './detalle-orden-producto/detalle-orden-producto.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 32768,
    username: 'admin',
    password: '12345678',
    database: 'despensa',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize:true,
    dropSchema:false,
  }),EmpresaModule,
    TiendaModule,
    ProductoModule,
    TipoProductoModule,
    DetalleOrdenModule,
    OrdenModule,
    MetodoPagoModule,
    UsuarioModule,
    RolModule,
    UsuarioRolModule,
    UsuarioOrdenModule,
    TiendaProductoModule,
    DetalleOrdenProductoModule,


  

  
  
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
