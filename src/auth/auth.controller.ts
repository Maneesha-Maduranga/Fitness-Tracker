import { Body, Controller, Post, Req, Res, Get, Request,UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request as REQUEST, Response } from 'express';
import { RegisterUserDto } from './dto/register.dto';
import { LoginUserDto } from './dto/login.dto';

import { AuthGuard } from './guard/auth.gurd';

@Controller('auth')
export class AuthController {
  constructor(private authServices: AuthService) {}

  @Post('register')
  register(@Body() userData: RegisterUserDto) {
    return this.authServices.register(userData);
  }

  @Post('login')
  login(@Res() res: Response, @Body() userData: LoginUserDto) {
    return this.authServices.login(res, userData);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  me(@Request() req: REQUEST) {
    return  this.authServices.me(req);
  }

  @Post('logout')
  logout() {
    this.authServices.logout();
  }
}
