import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeitorService } from './leitor.service';
import { CreateLeitorDto } from './dto/create-leitor.dto';
import { UpdateLeitorDto } from './dto/update-leitor.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('leitores')
export class LeitorController {
  constructor(private readonly leitorService: LeitorService) {}
  
  @Post('/cadastro')
  @ApiOperation({summary: "cadastra um leitor"})
  @ApiResponse({status:201, description: "leitor criado"})
  @ApiResponse({status:400, description: "leitor não criado"})

  cadastrarLeitor(@Body() createLeitorDto: CreateLeitorDto){
    return this.leitorService.cadastrarLeitor(createLeitorDto)
  }

  @Get('/listar-todos')
  @ApiOperation({summary: "lista todos os leitores"})
  @ApiResponse({status:200, description: "leitores encontrados"})
  @ApiResponse({status:404, description: "leitores não encontrados"})
  listarLeitores(){
    return this.leitorService.listarLeitores()
  }

  @Get('/pegar-dados-leitor/:id')
  @ApiOperation({summary: "pega os dados de um leitor"})
  @ApiResponse({status:200, description: "leitor encontrado"})
  @ApiResponse({status:404, description: "leitor não encontrado"})
  getDadosByLeitor(@Param('id') id:number){
    return this.leitorService.getDadosByLeitor(+id)
  }

  @Patch('/atualizar-dados-leitor/:id')
  @ApiOperation({summary: "atualiza os dados de um leitor"})
  @ApiResponse({status:200, description: "leitor encontrado"})
  @ApiResponse({status:404, description: "leitor não encontrado"})
  atualizarDadosDoLeitor(@Param('id') id:number, @Body() updateLeitorDto: UpdateLeitorDto){
    return this.leitorService.atualizarDadosDoLeitor(+id, updateLeitorDto)
  }

  @Delete('/deletar-leitor/:id')
  @ApiOperation({summary: "deleta um leitor"})
  @ApiResponse({status:200, description: "leitor encontrado"})
  @ApiResponse({status:404, description: "leitor não encontrado"})
  deletarLeitor(@Param('id') id:number){
    return this.leitorService.deletarLeitor(+id)
  }

  
}
