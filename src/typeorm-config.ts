import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { UserCredentials } from "./auth/credential.entity";
import { Userdata } from "./userdata/userdata.entity";

export const typeOrmConfig : TypeOrmModuleOptions= {
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'Shubh@7507',
    database:'userdata',
    synchronize:true,
    entities: [Userdata, UserCredentials],

//     logging: true,
  
//   logger: 'file',
//   // migrations: [__dirname + '/../migration/**/*.{.js,.ts}'],
//   // migrations: ["dist/migration/**/*{.js,.ts}"],

//   migrations: ["dist/migration/**/*.js"],
//   migrationsTableName: 'migrations_typeorm',
//   migrationsRun: false,

  
}


 