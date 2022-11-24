import { Userdata } from "src/userdata/userdata.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserCredentials{

    @PrimaryGeneratedColumn('uuid')
     id:string;

     @Column({unique:true})
     email:string;

     @Column()
     password:string;

     @OneToMany((_type) =>Userdata, (userdata)=>userdata.userCredentials , {eager:true}  )
     
     userdatas  :Userdata[];



}