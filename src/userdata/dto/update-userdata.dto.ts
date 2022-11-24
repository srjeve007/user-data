import { IsString , IsNotEmpty, IsOptional} from "class-validator";


export class UpdateUserdataDto{

    @IsString()
    @IsOptional()
    firstname:string;

    @IsString()
    @IsOptional()
    lastname:string;
    
    @IsString()
    @IsOptional()
    email:string;

    @IsString()
    @IsOptional()
    age:number;

    @IsString()
    @IsOptional()
    address:string;


    
}