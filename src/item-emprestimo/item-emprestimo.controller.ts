import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemEmprestimoService } from './item-emprestimo.service';
import { CreateItemEmprestimoDto } from './dto/create-item-emprestimo.dto';
import { UpdateItemEmprestimoDto } from './dto/update-item-emprestimo.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('itens-emprestimo')
export class ItemEmprestimoController {
  constructor(private readonly itemEmprestimoService: ItemEmprestimoService) {}
  
  @Post('/adicionar-item')
  @ApiOperation({summary: "adiciona um item"})
  @ApiResponse({status:201, description: "item criado"})
  @ApiResponse({status:400, description: "item não criado"})

  adicionarItemEmprestimo(@Body() createItemEmprestimoDto: CreateItemEmprestimoDto){
    return this.itemEmprestimoService.adicionarItemEmprestimo(createItemEmprestimoDto)
  }

  @Get('/listar-todos-os-itens')
  @ApiOperation({summary: "lista todos os itens de empréstimo"})
  @ApiResponse({status:200, description:"item found"})
  @ApiResponse({status:404, description: "item not found"})

  listarItensEmprestimo(){
    return this.itemEmprestimoService.listarItensEmprestimo()
  }

  @Get('/pegar-item-especifico/:id')
  @ApiOperation({summary: "pega os dados de um item de empréstimo específico"})
  @ApiResponse({status:200, description:"item found"})
  @ApiResponse({status:404, description: "item not found"})
  @ApiParam({name:"id", type:String})

  verItemEspecificoEmprestimo(@Param('id') id:string){
    return this.itemEmprestimoService.verItemEspecificoEmprestimo(+id)
  }

  @Patch('/atualizar-dados-item-emprestimo/:id')
  @ApiOperation({summary: "atualiza os dados de um item de empréstimo específico"})
  @ApiResponse({status:200, description:"item found"})
  @ApiResponse({status:404, description: "item not found"})
  @ApiParam({name:"id", type:String})

  atualizarDadosItem(@Param('id') id:string, @Body() updateItemEmprestimoDto: UpdateItemEmprestimoDto){
    return this.itemEmprestimoService.atualizarDadosItem(+id, updateItemEmprestimoDto)
  }

  @Delete('/remover-item-de-emprestimo/:id')
  @ApiOperation({summary: "deleta um item de empréstimo específico"})
  @ApiResponse({status:200, description:"item found"})
  @ApiResponse({status:404, description: "item not found"})
  @ApiParam({name:"id", type:String})

  removerItemEmprestimo(@Param('id') id:string){
    return this.itemEmprestimoService.removerItemEmprestimo(+id)
  }


}
