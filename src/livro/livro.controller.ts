import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LivroService } from './livro.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('livro')
export class LivroController {
  constructor(private readonly livroService: LivroService) {}
  
  @Post('/cadastro')
  @ApiOperation({summary: "cadastra um livro"})
  @ApiResponse({status:201, description: "livro criado"})
  @ApiResponse({status:400, description: "livro não criado"})

  cadastrarLivro(@Body() createLivroDto: CreateLivroDto){
    return this.livroService.cadastrarLivro(createLivroDto)
  }

  @Get('/listar-todos')
  @ApiOperation({summary: "lista todos os livros"})
  @ApiResponse({status:200, description: "livros encontrados"})
  @ApiResponse({status:404, description: "livros não encontrados"})
  listarLivros(){
    return this.livroService.listarLivros()
  }

  @Get('/pegar-dados-livro/:id')
  @ApiOperation({summary: "pega os dados de um livro"})
  @ApiResponse({status:200, description: "livro encontrado"})
  @ApiResponse({status:404, description: "livro não encontrado"})
  getLivroByDados(@Param('id') id:string){
    return this.livroService.getLivroByDados(+id)
  }

  @Patch('/atualizar-dados-livro/:id')
  @ApiOperation({summary: "atualiza os dados de um livro"})
  @ApiResponse({status:200, description: "livro encontrado"})
  @ApiResponse({status:404, description: "livro não encontrado"})
  atualizarDados(@Param('id') id:string, @Body() updateLivroDto: UpdateLivroDto){
    return this.livroService.atualizarDados(+id, updateLivroDto)
  }

  @Delete('/deletar-livro/:id')
  @ApiOperation({summary: "deleta um livro"})
  @ApiResponse({status:200, description: "livro encontrado"})
  @ApiResponse({status:404, description: "livro não encontrado"})
  deletarLivro(@Param('id') id:string){
    return this.livroService.deletarLivro(+id)
  }

}
