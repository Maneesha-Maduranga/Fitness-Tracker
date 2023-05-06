import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [PrismaModule,
    JwtModule.register({
    global: true,
    secret: process.env.JWTSECREAT,
    signOptions: { expiresIn: '2d' },
  }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
