import { Module } from '@nestjs/common';
import { LeitorService } from './leitor.service';
import { LeitorController } from './leitor.controller';

@Module({
  controllers: [LeitorController],
  providers: [LeitorService],
})
export class LeitorModule {}
