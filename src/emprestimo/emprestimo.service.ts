import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmprestimoDto } from './dto/create-emprestimo.dto';
import { UpdateEmprestimoDto } from './dto/update-emprestimo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmprestimoService {
  
  constructor(private prisma: PrismaService) {}

  async criarEmprestimo(createEmprestimoDto: CreateEmprestimoDto) {
    return await this.prisma.emprestimo.create({
      data: {
        data_emprestimo: createEmprestimoDto.data_emprestimo,
        prazo_de_devolucao: createEmprestimoDto.prazo_de_devolucao,
        observacoes: createEmprestimoDto.observacoes,
        id_leitor: createEmprestimoDto.id_leitor,
      }
    });
  }
  
  async listarEmprestimos() {
    const emprestimos = await this.prisma.emprestimo.findMany();

    if (!emprestimos || emprestimos.length === 0) {
      throw new NotFoundException("Não há empréstimos");
    }

    return emprestimos;
  }

  async getDadosByEmprestimo(id: number) {
    const emprestimo = await this.prisma.emprestimo.findUnique({
      where: { id }
    });

    if (!emprestimo) {
      throw new NotFoundException("Empréstimo não encontrado");
    }

    return emprestimo;
  }

  async atualizarDadosEmprestimo(id: number, updateEmprestimoDto: UpdateEmprestimoDto) {
    const emprestimo = await this.prisma.emprestimo.findUnique({
      where: { id }
    });

    if (!emprestimo) {
      throw new NotFoundException("Empréstimo não encontrado");
    }

    return this.prisma.emprestimo.update({
      where: { id },
      data: {
        data_emprestimo: updateEmprestimoDto.data_emprestimo,
        prazo_de_devolucao: updateEmprestimoDto.prazo_de_devolucao,
        observacoes: updateEmprestimoDto.observacoes,
        id_leitor: updateEmprestimoDto.id_leitor,
      },
    });
  }

}