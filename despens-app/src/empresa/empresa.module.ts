import { Module } from '@nestjs/common';
import { EmpresaService } from "./empresa.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmpresaEntity } from "./empresa.entity";
import { EmpresaController } from './empresa.controller';

@Module({
    imports:[TypeOrmModule.forFeature(
        [EmpresaEntity])],
    providers:[EmpresaService],
    controllers:[EmpresaController]
})

export class EmpresaModule {
}