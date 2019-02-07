import { ProductoDto } from './producto-dto';
import { Get, Controller, Post, Body, Query, Param } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Observable } from 'rxjs';
import { constants } from 'http2';



@Controller('producto')
export class ProductoController {
    constructor(private readonly _productoService: ProductoService) { }

    @Get('listar')
    async obtenerTodos() {

        return await this._productoService.obtenerTodosProductos();


    }
    @Get(':id')
    async buscarUno(@Param('id') id){
        return await this._productoService.buscarPorId(id);
    }

    @Post('buscar')
    async buscar(@Body('nombreProducto') nombreProducto){
        console.log('sdfasdfsdf',nombreProducto)
        return  await this._productoService.obtenerPorNombre(nombreProducto);
    }

    @Post('crear')
   async crear(
        @Body() producto:ProductoDto
    ){
        return await this._productoService.crear(producto);
    }

    @Post('editar')
    async editar(
        @Body('id')id,
        @Body('actualizacion')actualizaciones
    ){
        return await this._productoService.editar(id,actualizaciones)
    }
    @Post('eliminar')
    eliminar(
        @Body('id')id   
    ){
        
        return this._productoService.eliminar(id)
    }



}