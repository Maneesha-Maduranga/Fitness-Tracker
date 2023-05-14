import { Injectable, HttpStatus, Res, HttpException,UseGuards,Request } from '@nestjs/common';

import {  Response } from 'express';

import { RegisterUserDto } from './dto/register.dto';

import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginUserDto } from './dto/login.dto';


import { JwtService } from '@nestjs/jwt';


//Hash The Password
const hashPassword = async (password: string) => {
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
};

//Compare the Password
const comparePassword = async (password: string, hash: string) => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(userData: RegisterUserDto) {
    try {
      let password = await hashPassword(userData.password);

      let user = await this.prisma.user.create({
        data: {
          username: userData.userName,
          email: userData.email,
          password: password,
        },
      });

      //Create PayLoad
      const payload = { username: user.username, id: user.id };

      delete user.password;

      let access_token = await this.jwtService.sign(payload);

      return {
        sucess: true,
        data: { user },
        access_token,
      };
    } catch (error) {
      if (error.code == 'P2002') {
        throw new HttpException(
          `${error.meta.target.map((item) => item)} is Allready Taken `,
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  }

  async login(@Res() res: Response, userData: LoginUserDto) {
    //Check If User In the DataBase
    let user = await this.prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    if (!user) {
      throw new HttpException(
        'No User With Given Credential',
        HttpStatus.NOT_FOUND,
      );
    }

    //Compare Password
    let matched = await comparePassword(userData.password, user.password);

    if (!matched) {
      throw new HttpException('Password Incorrect', HttpStatus.BAD_REQUEST);
    }

    delete user.password;

    //Create PayLoad
    const payload = { username: user.username, id: user.id };

    let access_token = await this.jwtService.sign(payload);

    res
      .cookie('access_token', access_token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
      })
      .status(HttpStatus.OK)
      .json({ sucess: true, data: { user }, access_token: access_token });
  }
  
  
  me(req){
    return req.user
  }
 

  
  logout() {
    return 'User Logout';
  }
}
