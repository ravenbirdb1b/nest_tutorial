import { Controller,Post,Dependencies } from '@nestjs/common';
import { AuthService } from './auth.service';

 @Controller('auth') 
 @Dependencies(AuthService) 
 export class AuthController{
    constructor(authService){
        this.authService = authService
    }

    @Post('signup')
    signup(){
        return this.authService.signup()
    }

    @Post('signin')
    signin(){
        return this.authService.signin()
    }
 }