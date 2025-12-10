import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
// import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('signin')
    signin(){return this.authService.signin()}
    @Post('signup')
    signup(
       @Body() dto:AuthDto
    ){
        
        console.info(dto?.email,dto?.password);
        return this.authService.signup();
    }
}
