import {IsString}from 'class-validator';

export class EmpresaDto{
    
    @IsString()
    nombreEmpresa:string;
    


}
