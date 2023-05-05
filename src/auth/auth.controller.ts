import { Body, Controller, Post, Req,Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authServices: AuthService) {}

  @Post('register')
  register() {
   return this.authServices.register();
  }

  @Post('login')
  login() {
   return this.authServices.login();
  }

  @Post('logout')
  logout() {
    this.authServices.logout();
  }
}
