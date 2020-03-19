import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Crud } from '@nestjsx/crud';


@Crud({
    model: {
        type : User
    },
    params:{
        id:{ 
            field: 'id',
            type: 'uuid',
            primary: true


        }
    }
})

@Controller('users')
export class UsersController {
    constructor (public service: UsersService){}

}

    

    