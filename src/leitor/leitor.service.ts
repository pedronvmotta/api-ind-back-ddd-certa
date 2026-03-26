import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLeitorDto } from './dto/create-leitor.dto';
import { UpdateLeitorDto } from './dto/update-leitor.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLivroDto } from '../livro/dto/create-livro.dto';

@Injectable()
export class LeitorService {
    constructor(private prisma: PrismaService) {}

    async criarLeitor(createLeitorDto: CreateLeitorDto){
        return await this.prisma.leitor.create({
            data:{
                ...createLeitorDto
            }
        })
    }

    async listarLeitores() {
        return await this.prisma.leitor.findMany()
    }

    async getDadosByLeitor(id: number) {
        const leitor = await this.prisma.leitor.findUnique({
            where: { id }
        })

        if (!leitor) {
            throw new NotFoundException("leitor não encontrado")
        }

        return leitor;
    }

    async atualizarDadosDoLeitor(id: number, updateLeitorDto: UpdateLeitorDto) {
  const leitor = await this.prisma.leitor.findUnique({
    where: { id },
  });

  if (!leitor) {
    throw new NotFoundException('leitor não encontrado');
  }

  return this.prisma.leitor.update({
    where: { id },
    data: {
      ...updateLeitorDto,
      ...(updateLeitorDto.data_de_nascimento && {
        data_de_nascimento: new Date(updateLeitorDto.data_de_nascimento),
      }),
    },
  });
}

    async deletarLeitor(id: number) {
        // bug: o findUnique precisa vir antes do delete
        const leitor = await this.prisma.leitor.findUnique({
            where: { id }
        })

        if (!leitor) {
            throw new NotFoundException("leitor não encontrado")
        }

        return this.prisma.leitor.delete({
            where: { id }
        })
    }
}