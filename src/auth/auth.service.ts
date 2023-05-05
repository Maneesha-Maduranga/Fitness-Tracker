import { Injectable , Res,HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AuthService {
    register(){
        return "Register"
    }
    login(){
        return "User Login"
    }
    logout(){
        return "User Logout"
    }
}
