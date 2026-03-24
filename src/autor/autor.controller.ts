import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutorService } from './autor.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateAutorDto } from './dto/create-autor.dto';


@Controller('autores')
export class AutorController {
  
constructor(private readonly autorService: AutorService){}

// /autores/cadastro
@Post('/cadastro')
@ApiOperation({summary: "fazer cadastro dos autores"})
@ApiResponse({status: 200, description: "autor encontrado" })
@ApiResponse({status: 404, description: "autor não encontrado"})
cadastrarAutores(@Body() autorDto: CreateAutorDto){
    return this.autorService.cadastrarAutor(autorDto)
}

// /autores/listar-autores

@Get('/listar-autores')
@ApiOperation({summary: "listar todos os autores"})
@ApiResponse({status: 200, description: "autor encontrado" })
@ApiResponse({status: 404, description: "autor não encontrado"})
listarAutores(){  
    return this.autorService.listarAutores()
}

}
