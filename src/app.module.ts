import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm-config';
import { UserdataModule } from './userdata/userdata.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [UserdataModule, TypeOrmModule.forRoot( typeOrmConfig), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
