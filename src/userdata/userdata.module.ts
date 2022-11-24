import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserCredentials } from 'src/auth/credential.entity';
import { UserdataController } from './userdata.controller';
import { Userdata } from './userdata.entity';
import { UserdataService } from './userdata.service';

@Module({
  imports: [TypeOrmModule.forFeature([Userdata]), AuthModule],
  controllers: [UserdataController],
  providers: [UserdataService],
})
export class UserdataModule {}
