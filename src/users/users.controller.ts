// no controller, eu só falo: ah essa função retorna essa outra função


import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {


    constructor(private usersService : UsersService){
        // tipo falar pro nest - que classe ele deve instanciar pros tras dos panos

    }

    @Get('find-all')
    getUsers(): any {
        return this.usersService;
    }

    @Get('user-by-id')
    get_user_by_id(@Param('id') id: string): any{
        return this.usersService.findById(Number(id));
    }

    

}
