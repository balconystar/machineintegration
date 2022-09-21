import { Controller, Get } from '@nestjs/common';

@Controller('user')

export class UsersController{
    @Get('signup')
    signup(){
        return 'Yoo';
    }
}
