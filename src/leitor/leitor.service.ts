import { Injectable } from '@nestjs/common';
import { CreateLeitorDto } from './dto/create-leitor.dto';
import { UpdateLeitorDto } from './dto/update-leitor.dto';

@Injectable()
export class LeitorService {
  create(createLeitorDto: CreateLeitorDto) {
    return 'This action adds a new leitor';
  }

  findAll() {
    return `This action returns all leitor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} leitor`;
  }

  update(id: number, updateLeitorDto: UpdateLeitorDto) {
    return `This action updates a #${id} leitor`;
  }

  remove(id: number) {
    return `This action removes a #${id} leitor`;
  }
}
