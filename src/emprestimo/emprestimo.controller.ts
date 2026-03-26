import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmprestimoService } from './emprestimo.service';
import { CreateEmprestimoDto } from './dto/create-emprestimo.dto';
import { UpdateEmprestimoDto } from './dto/update-emprestimo.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('emprestimos')
export class EmprestimoController {
  constructor(private readonly emprestimoService: EmprestimoService) {}
  
  @Post('/criar-emprestimo')
  @ApiOperation({summary:"cria um empréstimo"}) 
  @ApiResponse({status:201, description: "empréstimo criado"}) 
  @ApiResponse({status:400, description: 'empréstimo não criado'})  

  criarEmprestimo(@Body() createEmprestimoDto: CreateEmprestimoDto){
    return this.emprestimoService.criarEmprestimo(createEmprestimoDto)
  }

  @Get('/listar-todos')
  @ApiOperation({summary:"lista todos os empréstimos"})
  @ApiResponse({status:200, description: "empréstimo encontrado"})
  @ApiResponse({status:404, description: 'empréstimos não encontrados'}) 
  listarEmprestimos(){
    return this.emprestimoService.listarEmprestimos()
  }

  @Get('/pegar-dados-emprestimo/:id')
  @ApiOperation({summary:"pega os dados de um empréstimo"})
  @ApiResponse({status:200, description: "empréstimo encontrado"})
  @ApiResponse({status:404, description: 'empréstimo não encontrado'})
  getDadosByEmprestimo(@Param('id') id:string){
    return this.emprestimoService.getDadosByEmprestimo(+id)
  }

  @Patch('/atualizar-dados-emprestimo/:id')
  @ApiOperation({summary:"atualiza os dados de um empréstimo"})
  @ApiResponse({status:200, description: "empréstimo atualizado"})
  @ApiResponse({status:404, description: 'empréstimo não encontrado'})
  atualizarDadosEmprestimo(@Param('id') id:string, @Body() updateEmprestimoDto: UpdateEmprestimoDto){
    return this.emprestimoService.atualizarDadosEmprestimo(+id, updateEmprestimoDto)
  }
}
