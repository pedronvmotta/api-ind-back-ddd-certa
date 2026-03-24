import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutorService } from './autor.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateAutorDto } from './dto/create-autor.dto';


@Controller('autores')
export class AutorController {
  constructor(private readonly autorService: AutorService) {} // ← constructor vazio

  
}
