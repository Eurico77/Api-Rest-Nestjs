import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';


import {TypeOrmCrudService} from '@nestjsx/crud-typeorm'



@Injectable()
 export class UsersService extends TypeOrmCrudService<User>{
  constructor(@InjectRepository(User) repo){
      super(repo);
  }
}

