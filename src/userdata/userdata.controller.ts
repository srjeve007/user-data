import { Body, Controller, Delete, Get, Param, Patch, Post,Query,UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { FilterUserDto } from './dto/filter-user.dto';
import { StoreUserdataDto } from './dto/store-userdata.dto';
import { UpdateUserdataDto } from './dto/update-userdata.dto';
import { Userdata } from './userdata.entity';
import { UserdataService } from './userdata.service';
import {UserCredentials} from 'src/auth/credential.entity';

@Controller('userdata')
@UseGuards(AuthGuard())
export class UserdataController {
    constructor (private userdataService: UserdataService){}

@Get()
 getUser(@Query() filterUserDto:FilterUserDto,
         @GetUser() userCredentials:UserCredentials ): Promise<Userdata[]>{
    return this.userdataService.getUser(filterUserDto, userCredentials);
 }

 @Get('/:id')
 getUserById(@Param('id') id:number ,
             @GetUser() userCredentials:UserCredentials ):Promise<Userdata>{
   return this.userdataService.getUserById(id, userCredentials);
 }


 @Delete('/:id')
 deleteUserById(@Param('id') id :number,
                @GetUser() userCredentials: UserCredentials):Promise<void>{
    return this.userdataService.deleteUserById(id, userCredentials);
 }


@Post()
 createUser(@Body() storeUserdataDto: StoreUserdataDto,
            @GetUser() userCredentials:UserCredentials): Promise<Userdata>{

    return this.userdataService.createUser(storeUserdataDto, userCredentials);
 }
    
 @Patch('/:id/email/address')
 updateUserdata( @Param('id') id:number ,
                 @Body() updateUserdataDto:UpdateUserdataDto,
                 @GetUser() userCredentials:UserCredentials):Promise<Userdata>{

                    return this.userdataService.updateUserdata(id, updateUserdataDto, userCredentials);
                }

}
