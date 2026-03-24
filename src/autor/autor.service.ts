import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutorService {

  constructor(private readonly prisma: PrismaService) {}

  async cadastrarAutor(createAutorDto: CreateAutorDto) {
  return await this.prisma.autor.create({
    data: {
      ...createAutorDto,
      data_de_nascimento: new Date(createAutorDto.data_de_nascimento),
    },
  });
}

  async listarAutores() {
    // bug: estava consultando prisma.leitor
    const autores = await this.prisma.autor.findMany()

    if (!autores || autores.length === 0) {
      throw new NotFoundException('não há autores')
    }

    return autores;
  }

  async getDadosByAutor(id: number) {
    // bug: estava consultando prisma.leitor
    const autor = await this.prisma.autor.findUnique({
      where: { id }
    })

    if (!autor) {
      throw new NotFoundException('autor não encontrado')
    }

    return autor;
  }

  async updateDadosAutor(id: number, updateAutorDto: UpdateAutorDto) {
    const autor = await this.prisma.autor.findUnique({
      where: { id }
    })

    if (!autor) {
      throw new NotFoundException('autor não encontrado')
    }

    return this.prisma.autor.update({
      where: { id },
      data: updateAutorDto
    })
  }

  async deletarAutor(id: number) {
    const autor = await this.prisma.autor.findUnique({
      where: { id }
    })

    if (!autor) {
      throw new NotFoundException('autor não encontrado')
    }

    return this.prisma.autor.delete({
      where: { id }
    })
  }
}