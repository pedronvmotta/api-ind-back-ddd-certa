import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LivrosModule } from './livros/livros.module';

@Module({
    imports: [UsersModule, LivrosModule]
})

export class AppModule {}