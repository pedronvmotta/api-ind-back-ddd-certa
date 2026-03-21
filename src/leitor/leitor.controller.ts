import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeitorService } from './leitor.service';
import { CreateLeitorDto } from './dto/create-leitor.dto';
import { UpdateLeitorDto } from './dto/update-leitor.dto';

@Controller('leitor')
export class LeitorController {
  constructor(private readonly leitorService: LeitorService) {}

  @Post()
  create(@Body() createLeitorDto: CreateLeitorDto) {
    return this.leitorService.create(createLeitorDto);
  }

  @Get()
  findAll() {
    return this.leitorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leitorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeitorDto: UpdateLeitorDto) {
    return this.leitorService.update(+id, updateLeitorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leitorService.remove(+id);
  }
}
