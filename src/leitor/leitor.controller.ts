import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeitorService } from './leitor.service';
import { CreateLeitorDto } from './dto/create-leitor.dto';
import { UpdateLeitorDto } from './dto/update-leitor.dto';

@Controller('leitor')
export class LeitorController {
  constructor(private readonly leitorService: LeitorService) {}
  
}
