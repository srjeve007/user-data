import {  IsOptional, IsString } from "class-validator";

export class FilterUserDto{

    @IsOptional()
    @IsString()
    username?:string;

    @IsOptional()
    @IsString()
    search?:string;
}