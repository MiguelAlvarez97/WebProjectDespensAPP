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
import { RolUsuarioModule } from './rol-usuario/rol-usuario.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 32770,
    username: 'admin',
    password: '12345678',
    database: 'despensa',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize:true,
    dropSchema:true,
  }),EmpresaModule,
  TiendaModule,
  ProductoModule,
  DetalleOrdenModule,
  OrdenModule,
  UsuarioModule,
  
  
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
