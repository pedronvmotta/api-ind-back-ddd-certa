import { Injectable } from '@nestjs/common';
import { CreateItemEmprestimoDto } from './dto/create-item-emprestimo.dto';
import { UpdateItemEmprestimoDto } from './dto/update-item-emprestimo.dto';

@Injectable()
export class ItemEmprestimoService {
  create(createItemEmprestimoDto: CreateItemEmprestimoDto) {
    return 'This action adds a new itemEmprestimo';
  }

  findAll() {
    return `This action returns all itemEmprestimo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itemEmprestimo`;
  }

  update(id: number, updateItemEmprestimoDto: UpdateItemEmprestimoDto) {
    return `This action updates a #${id} itemEmprestimo`;
  }

  remove(id: number) {
    return `This action removes a #${id} itemEmprestimo`;
  }
}
