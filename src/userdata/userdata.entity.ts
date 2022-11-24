import { Exclude } from "class-transformer";
import { UserCredentials } from "src/auth/credential.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'users'})
export class Userdata extends BaseEntity{


    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    firstname:string;

    @Column({nullable:true})
    lastname:string;

    @Column({unique:true})
    username:string;

    @Column({unique:true})
    email:string;

    @Column({})
    age:number;

    @Column()
    address:string;

    @CreateDateColumn()
    createdOn: Date;

     @UpdateDateColumn()
     updatedOn: Date;
    credential: any;

    @ManyToOne((_type) =>UserCredentials, (userCredential)=>userCredential.userdatas, {eager:false})
    @Exclude({ toPlainOnly:true})
    userCredentials:UserCredentials;
}