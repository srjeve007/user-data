import {     Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserCredentials } from 'src/auth/credential.entity';
import { Repository } from 'typeorm';
import { FilterUserDto } from './dto/filter-user.dto';
import { StoreUserdataDto } from './dto/store-userdata.dto';
import { UpdateUserdataDto } from './dto/update-userdata.dto';
import { Userdata } from './userdata.entity';

@Injectable()
export class UserdataService {

 constructor(@InjectRepository(Userdata) private userdataRepository:Repository<Userdata>,){}

async getUser(filterUserDto:FilterUserDto, userCredentials:UserCredentials):Promise<Userdata[]>{
    const {username, search}=filterUserDto;
    const query= this.userdataRepository.createQueryBuilder('userdata');

    query.where({userCredentials});

    if(username)
        {
            query.andWhere('userdata.username = :username', {username});
        }
    if(search)
        {
            query.andWhere(
            '(LOWER(userdata.firstname) LIKE LOWER  (:search) OR LOWER(userdata.lastname) LIKE LOWER(:search))',
                {search : '%${search}%'},
                          )
        }    

        const users= await query.getMany();
        return users;
}

async getUserById(id:number, userCredentials:UserCredentials):Promise<Userdata>{
    const found= await this.userdataRepository.findOne({where:{id, }});
    
    if(!found)
        {
            throw new NotFoundException(`User with ID "${id}" not found`);
        }

    
    return found;    
}


async deleteUserById(id:number, userCredentials:UserCredentials):Promise<void>{
    const found= await this.userdataRepository.findOne({where:{id, }});
    console.log(found);
    if(found)
    { await this.userdataRepository.delete(id); }
    else
    {throw new NotFoundException(`User with ID "${id}" not found`); }
}


 async createUser(storeUserdataDto: StoreUserdataDto, userCredentials:UserCredentials):Promise<Userdata>{

    const {firstname, lastname,username,email,age,address}=storeUserdataDto;
    const usernameExist= await this.userdataRepository.findOne({where:{username:'username'}});

    if(!usernameExist){
    const usersdata= this.userdataRepository.create({
        firstname, lastname,username,email,age,address,userCredentials
    }
    )
   await this.userdataRepository.save(usersdata);
   return usersdata;}

   else{ throw new NotFoundException(`User with username "${username}" already exists`);}
}


async updateUserdata(id:number, updateUserdataDto:UpdateUserdataDto, userCredentials:UserCredentials):Promise<Userdata>{

    const {firstname, lastname , email,age, address, }=updateUserdataDto;
    const user= await this.getUserById(id, userCredentials);

    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;

    await this.userdataRepository.save(user);
    return user;

}


}
