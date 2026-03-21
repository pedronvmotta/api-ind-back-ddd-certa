// lembra quando no controller eu falei: "ah essa função retorna essa outra função" ? então, essa outra função é escrita em detalhes aqui no service

// é bom primeiro fazer o service pra depois ir pro controller

import { Injectable } from '@nestjs/common';


@Injectable()
export class UsersService {
    private users: any = [
        { id: 0, name: 'mestre neri', }
    ];

    findAll(){
        return this.users;
    }

    findById(userId: number){
        return this.users.find(user=>user.id === userId)
    }

    

}
