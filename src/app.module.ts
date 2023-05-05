import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GoalModule } from './goal/goal.module';


@Module({
  imports: [UserModule, AuthModule, GoalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
