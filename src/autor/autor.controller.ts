import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutorService } from './autor.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateAutorDto } from './dto/create-autor.dto';


@Controller('autores')
export class AutorController {
  constructor(private readonly autorService: AutorService) {} // ← constructor vazio

  @ApiOperation({ summary: 'Cria autores' })
  @ApiResponse({ status: 201, description: 'Criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor' })
  @Post('/criar-autor')
  criarAutor(@Body() createAutorDto: CreateAutorDto) {
    return this.autorService.criarAutor(createAutorDto);
  }
}
