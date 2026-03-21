import { Module } from '@nestjs/common';
import { ItemEmprestimoService } from './item-emprestimo.service';
import { ItemEmprestimoController } from './item-emprestimo.controller';

@Module({
  controllers: [ItemEmprestimoController],
  providers: [ItemEmprestimoService],
})
export class ItemEmprestimoModule {}
