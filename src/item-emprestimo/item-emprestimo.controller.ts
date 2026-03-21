import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemEmprestimoService } from './item-emprestimo.service';
import { CreateItemEmprestimoDto } from './dto/create-item-emprestimo.dto';
import { UpdateItemEmprestimoDto } from './dto/update-item-emprestimo.dto';

@Controller('item-emprestimo')
export class ItemEmprestimoController {
  constructor(private readonly itemEmprestimoService: ItemEmprestimoService) {}

  @Post()
  create(@Body() createItemEmprestimoDto: CreateItemEmprestimoDto) {
    return this.itemEmprestimoService.create(createItemEmprestimoDto);
  }

  @Get()
  findAll() {
    return this.itemEmprestimoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemEmprestimoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItemEmprestimoDto: UpdateItemEmprestimoDto) {
    return this.itemEmprestimoService.update(+id, updateItemEmprestimoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemEmprestimoService.remove(+id);
  }
}
