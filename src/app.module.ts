import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GoalModule } from './goal/goal.module';



import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    UserModule, 
    AuthModule, 
    GoalModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
