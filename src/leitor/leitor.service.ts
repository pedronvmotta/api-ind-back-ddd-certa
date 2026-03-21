import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLeitorDto } from './dto/create-leitor.dto';
import { UpdateLeitorDto } from './dto/update-leitor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeitorService {
    constructor(private prisma: PrismaService) {}
    
    async cadastrarLeitor(createLeitorDto: CreateLeitorDto){
      const leitor = await this.prisma.leitor.create({
        data:{
          ...createLeitorDto,
          data_de_nascimento : new Date(createLeitorDto.data_de_nascimento)
        },
      })
      return leitor;
    }

    async listarLeitores(){
      return await this.prisma.leitor.findMany() 
    } // pra retornar geral, é só dar o findMany sem parâmetro nenhum

    async getDadosByLeitor(id:number){  
      const leitor = await this.prisma.leitor.findUnique({
        where:{id}
      })
      return leitor;
    }

    async atualizarDadosDoLeitor(id:number, updateLeitorDto:UpdateLeitorDto){   
      const leitor = await this.prisma.leitor.findUnique({
        where: {id},
      })

      if(!leitor){
        throw new NotFoundException('Usuário não encontrado')
      }

      return this.prisma.leitor.update({
        where: {id},
        data: updateLeitorDto
      })
    }

    async deletarLeitor(id:number){
      const leitor = await this.prisma.leitor.delete({
        where: {id}
      })
      if(!leitor){
        throw new NotFoundException("Não há usuários a serem deletados")
      }
      return leitor;
    }
}
