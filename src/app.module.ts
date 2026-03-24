import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LeitorModule } from './leitor/leitor.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';
import { ItemEmprestimoModule } from './item-emprestimo/item-emprestimo.module';
import { LivroModule } from './livro/livro.module';
import { AutorModule } from './autor/autor.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LeitorModule,
    EmprestimoModule,
    ItemEmprestimoModule,
    LivroModule,
    AutorModule,
    PrismaModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}