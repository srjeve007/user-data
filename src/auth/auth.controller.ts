import { Body, Controller, Post } from '@nestjs/common';
import {AuthService} from './auth.service'
import { AuthenticationDto } from './dto/authentication.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService) {}


    @Post('/signup')
    signUp(@Body() authenticationDto:AuthenticationDto):Promise<void>{
        return this.authService.signUp(authenticationDto);
    }

    @Post('/signin')
    signIn(@Body() authenticationDto:AuthenticationDto):Promise<{ accessToken: string}>{
        return this.authService.signIn(authenticationDto);
    }
    
}
