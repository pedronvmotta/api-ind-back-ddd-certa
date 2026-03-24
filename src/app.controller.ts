import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller('app') 
export class AppController {
  constructor(private readonly appService: AppService) {
    
  }

  @UseGuards(JwtAuthGuard) // aqui eu protejo a rota, ou seja, só quem tiver um token válido pode acessar
  @Get('hello')
  getHello(@Request() req): string {
    console.log(req.user)
    return this.appService.getHello();
  }
}


