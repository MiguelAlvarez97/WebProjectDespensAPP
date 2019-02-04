import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from '../src/usuario/usuario.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EmpresaModule } from './empresa/empresa.module';
import { TiendaModule } from './tienda/tienda.module';
import { ProductoModule } from './producto/producto.module';
import { OrdenModule } from './orden/orden.module';
import { DetalleOrdenModule } from './detalle-orden/detalle-orden.module';
import { TipoProductoModule } from './tipo-producto/tipo-producto.module';
import { MetodoPagoModule } from './metodo-pago/metodo-pago.module';
import { RolUsuarioModule } from './rol-usuario/rol-usuario.module';

@Module({
  imports: [UsuarioModule, EmpresaModule, TiendaModule, ProductoModule, OrdenModule, DetalleOrdenModule, TipoProductoModule, MetodoPagoModule, RolUsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
