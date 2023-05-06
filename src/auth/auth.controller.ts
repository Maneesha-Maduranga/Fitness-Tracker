import { Body, Controller, Post, Req,Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';


@Controller('auth')
export class AuthController {
  constructor(private authServices: AuthService) {}

  @Post('register')
  register(@Body() userData:RegisterUserDto) {
   return this.authServices.register(userData);
  }

  @Post('login')
  login(@Body() userData:LoginUserDto) {
   return this.authServices.login(userData);
  }

  @Post('logout')
  logout() {
    this.authServices.logout();
  }
}
