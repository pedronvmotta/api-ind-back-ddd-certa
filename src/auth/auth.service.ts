import { Injectable} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import {JwtService} from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';
    
@Injectable()
export class AuthService {
    constructor(private readonly prisma:PrismaService,
        private readonly userService:UserService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(email, password){
        const user =  await this.userService.findByEmail(email)
        if(!user ||  !(await bcrypt.compare(password, user.password))){
            throw new Error('Credenciais inválidas')
        }
        return {...user, password: undefined}
    }

    async login(user){
        // vai pegar o meu usuário e criar um JWT pra ele
        const payload = {id: user.id, email: user.email}
        const jwtToken = this.jwtService.sign(payload, {secret: process.env.JWT_SECRET, expiresIn: "1d"})
        return {
            acess_token: jwtToken
        }
    }
}
