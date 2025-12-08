import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('signin')
    signin(){return this.authService.signin}
    @Post('signup')
    signup(
        @Req() request:Request
    ){
        console.info(request);
        return this.authService.signup;
    }
}
