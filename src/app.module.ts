import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  User } from './models/users/user.entity';
import { UsersController } from './models/users/userscontroller';
import { UsersService } from './models/users/users.service';
import { UsersModule } from './models/users/users.module';




@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
