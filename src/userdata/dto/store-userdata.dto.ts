import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class StoreUserdataDto{
    @IsNotEmpty()
    @IsString()
    firstname:string;

    @IsNotEmpty()
    @IsString()
    lastname:string;

    @IsNotEmpty()
    @IsString()
    username:string;

    @IsNotEmpty()
    @IsString()
    email:string;

    @IsNotEmpty()
    
    age:number;

    @IsNotEmpty()
    @IsString()
    address:string;

}