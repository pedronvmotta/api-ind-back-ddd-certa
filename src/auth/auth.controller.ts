import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
    // o controller guarda as rotas

    constructor(private readonly authService:AuthService){}

    // use guards = decorador colocado sobre os endpoints para fazer uma verificação no mesmo
    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req){
         return this.authService.login(req.user)
    }
    
}
