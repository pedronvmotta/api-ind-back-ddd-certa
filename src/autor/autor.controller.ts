import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutorService } from './autor.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateAutorDto } from './dto/create-autor.dto';


@Controller('autores')
export class AutorController {
  constructor(private readonly autorService: AutorService) {} 

@Post('/cadastro')
@ApiOperation({summary: "cria um autor"})
@ApiResponse({status:201, description: "autor criado"})
@ApiResponse({status:400, description: 'autor não criado'})
cadastrarAutor(@Body () createAutorDto: CreateAutorDto){
  return this.autorService.cadastrarAutor(createAutorDto)
}

@Get('/listar-todos')
@ApiOperation({summary:"lista todos os autores"})
@ApiResponse({status:200, description: "autor encontrado"})
@ApiResponse({status:404, description: 'autores não encontrados'})

listarAutores(){ 
  return this.autorService.listarAutores()
}

@Get('/pegar-dados-autor/:id')
@ApiOperation({summary:"pega os dados de um autor"})
@ApiResponse({status:200, description: "autor encontrado"})
@ApiResponse({status:404, description: 'autor não encontrado'})
@ApiParam({name: "id", type:Number})

getDadosByAutor(@Param('id') id:number){
  return this.autorService.getDadosByAutor(+id)
}

@Patch('/atualizar-dados/:id')
@ApiOperation({summary:"atualiza os dados de um autor"})
@ApiResponse({status:200, description: "autor atualizado"})
@ApiResponse({status:404, description: 'autor não encontrado'})
@ApiParam({name: "id", type:Number})

updateDadosAutor(@Param('id') id:number, @Body() updateAutorDto: CreateAutorDto){
  return this.autorService.updateDadosAutor(+id, updateAutorDto)
}

@Delete('/deletar-autor/:id')
@ApiOperation({summary:"deleta um autor"})
@ApiResponse({status:200, description: "autor deletado"})
@ApiResponse({status:404, description: 'autor não encontrado'})
@ApiParam({name: "id", type:Number})

deletarAutor(@Param('id') id:number){
  return this.autorService.deletarAutor(+id)
}
  
}
