import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { LocalStrategy } from './strategies/local-strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [AuthService, PrismaService, UserService, LocalStrategy, JwtService],
  controllers: [AuthController]
})
export class AuthModule {
  // só as estratégias mudam, o resto é padrão


}
