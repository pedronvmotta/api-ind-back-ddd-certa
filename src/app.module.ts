import { Module } from '@nestjs/common';
import { LeitorModule } from './leitor/leitor.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';
import { ItemEmprestimoModule } from './item-emprestimo/item-emprestimo.module';
import { LivroModule } from './livro/livro.module';
import { AutorModule } from './autor/autor.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { AppController } from './app.controller';
import { AuthController } from './auth/auth.controller';
import { LocalStrategy } from './auth/strategies/local-strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [LeitorModule, EmprestimoModule, ItemEmprestimoModule, LivroModule, AutorModule, PrismaModule, AuthModule, UserModule],

    controllers:[AppController, AuthController],

    providers: [AppService, PrismaService,AuthService, UserService, LocalStrategy, JwtService]
})

export class AppModule {}