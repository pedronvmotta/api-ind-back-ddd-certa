import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemEmprestimoDto } from './dto/create-item-emprestimo.dto';
import { UpdateItemEmprestimoDto } from './dto/update-item-emprestimo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemEmprestimoService {
  
  constructor(private prisma:PrismaService){}

  async adicionarItemEmprestimo(createItemEmprestimoDto: CreateItemEmprestimoDto){
    return this.prisma.itemEmprestimo.create({
      data: {
      data_de_devolucao: createItemEmprestimoDto.data_de_devolucao,
      valor_multa: createItemEmprestimoDto.valor_multa,
      status: createItemEmprestimoDto.status,
      id_emprestimo: createItemEmprestimoDto.id_emprestimo,
      id_livro: createItemEmprestimoDto.id_livro
    }
    })
  }

async listarItensEmprestimo(){

const itensEmprestimo =  await this.prisma.itemEmprestimo.findMany()

if(!itensEmprestimo || itensEmprestimo.length===0){
  throw new NotFoundException("Itens de empréstimo não encontrados")
} 

return itensEmprestimo;
  
}

async verItemEspecificoEmprestimo(id:number){

const itemEmprestimo = await this.prisma.itemEmprestimo.findUnique({
  where:{id}
})

if(!itemEmprestimo){
  throw new NotFoundException("Item nao encontrado")
}

return itemEmprestimo;

}

async atualizarDadosItem(id:number, updateItemEmprestimoDto: UpdateItemEmprestimoDto){
  const itemEmprestimo = await this.prisma.itemEmprestimo.findUnique({
    where:{id}
  })

  if(!itemEmprestimo){
    throw new NotFoundException("Item de empréstimo não encontrado")
  }

  return this.prisma.itemEmprestimo.update({
    where:{id},
    data: updateItemEmprestimoDto
  })
}

async removerItemEmprestimo(id:number){
  const itemEmprestimo = await this.prisma.itemEmprestimo.findUnique({
    where:{id}
  })

  if(!itemEmprestimo){
    throw new NotFoundException("Item de empréstimo não encontrado")
  }

  return this.prisma.itemEmprestimo.delete({
    where:{id}
  })
}

}


