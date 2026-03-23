import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmprestimoDto } from './dto/create-emprestimo.dto';
import { UpdateEmprestimoDto } from './dto/update-emprestimo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmprestimoService {
  
  constructor(private prisma:PrismaService){}

  async criarEmprestimo(createEmprestimoDto: CreateEmprestimoDto){
    return await this.prisma.emprestimo.create({
      data:{
        ...createEmprestimoDto
      }
    })
  }
  
  async listarEmprestimos(){
    const emprestimos = await this.prisma.emprestimo.findMany()

    if(!emprestimos || emprestimos.length===0){
      throw new NotFoundException("Não há empréstimos")
    }

    return emprestimos;
  }

  async getDadosByEmprestimo(id:number){
    const emprestimo = this.prisma.emprestimo.findUnique({
      where:{id}
    })
    if(!emprestimo){
      throw new NotFoundException("Não há empréstimos")
    }
    return emprestimo;
  }

  async atualizarDadosEmprestimo(id:number , updateEmprestimoDto: UpdateEmprestimoDto
  ){
    const emprestimo = this.prisma.emprestimo.findUnique({
      where:{id}
    })
    if(!emprestimo){
      throw new NotFoundException("Não há empréstimos")
    }
    return this.prisma.emprestimo.update({
      where:{id},
      data: updateEmprestimoDto,
    })
  }

}

