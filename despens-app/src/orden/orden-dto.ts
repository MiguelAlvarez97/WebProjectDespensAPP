import { IsDate, IsString } from "class-validator";

export class OrdenDto{

    @IsDate()
    fecha:string;
}
