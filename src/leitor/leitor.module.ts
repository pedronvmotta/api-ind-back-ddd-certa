import { Module } from '@nestjs/common';
import { LeitorService } from './leitor.service';
import { LeitorController } from './leitor.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LeitorController],
  providers: [LeitorService, PrismaService],
})
export class LeitorModule {}
