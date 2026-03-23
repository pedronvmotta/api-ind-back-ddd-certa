import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemEmprestimoService } from './item-emprestimo.service';
import { CreateItemEmprestimoDto } from './dto/create-item-emprestimo.dto';
import { UpdateItemEmprestimoDto } from './dto/update-item-emprestimo.dto';

@Controller('item-emprestimo')
export class ItemEmprestimoController {
  constructor(private readonly itemEmprestimoService: ItemEmprestimoService) {}
  
}
