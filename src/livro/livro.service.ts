import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LivroService {
  constructor(private prisma: PrismaService) {}

  async cadastrarLivro(createLivroDto: CreateLivroDto){
    const livro = await this.prisma.livro.create({
      data:{
        ...createLivroDto,
      }
    })
    return livro;
  }

  async listarLivros(){
    const livros = await this.prisma.livro.findMany()

    if(!livros || livros.length===0){
      throw new NotFoundException("Não há livros cadastrados")
    }

    return livros;
  }

  async getLivroByDados(id:number){
    const livro = await this.prisma.livro.findUnique({
      where: {id}
    })
    if(!livro){
      throw new NotFoundException("Livro não encontrado")
    }
    return livro;
  }

  async atualizarDados(id:number, updateLivroDto: UpdateLivroDto){
    const livro = await this.prisma.livro.findUnique({
      where:{id}
    })

    if(!livro){
      throw new NotFoundException("Livro não encontrado")
    }

    return this.prisma.livro.update({
      where:{id},
      data:updateLivroDto
    })
  }

  async deletarLivro(id:number){
    const livro = this.prisma.livro.findUnique({
      where:{id}
    })

    if(!livro){
      throw new NotFoundException("Livro a ser deletado não encontrado")
    }

    return this.prisma.livro.delete({
      where:{id}
    })
  }
}
