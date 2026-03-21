import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app') // decoradores em todo o projeto são usados para marcar as classes, métodos ou propriedades com metadados que o NestJS pode usar para configurar o comportamento da aplicação. O decorador @Controller é usado para marcar uma classe como um controlador, que é responsável por lidar com as requisições HTTP e retornar respostas. Ele pode receber um argumento opcional que define a rota base para os métodos dentro do controlador. Por exemplo, @Controller('users') faria com que todos os métodos dentro desse controlador fossem acessíveis através de rotas que começam com /users.
export class AppController {
  constructor(private readonly appService: AppService) {
    
  }
  @Get('hello') // O decorador @Get é usado para marcar um método dentro de um controlador como um manipulador de requisições HTTP GET. Ele pode receber um argumento opcional que define a rota específica para esse método. Por exemplo, @Get('hello') faria com que esse método fosse acessível através da rota /app/hello (considerando que o controlador tem a rota base 'app').
  getHello(): string {
    return this.appService.getHello();
  }
}


