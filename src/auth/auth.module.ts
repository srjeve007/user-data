import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserCredentials } from './credential.entity';
import { JwtStrategy } from './jwt-strategy';

@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions:{ expiresIn:3600,},
    }),
    TypeOrmModule.forFeature([ UserCredentials])],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule {}
