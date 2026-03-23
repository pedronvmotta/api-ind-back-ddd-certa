import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { Autor } from './entities/autor.entity';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutorService {

constructor(private prisma: PrismaService) {}
async cadastrarAutor(createAutorDto: CreateAutorDto) {
return await this.prisma.autor.create({
    data: {
      nome_autor: createAutorDto.nome_autor,
      origem: createAutorDto.origem,
      biografia: createAutorDto.biografia,
      data_de_nascimento: createAutorDto.data_de_nascimento,
      nome_artistico: createAutorDto.nome_artistico,
      livro: {},
    },
  });
}

async listarAutores(){
    const autores =  await this.prisma.livro.findMany()
    if(!autores || autores.length===0){
        throw new NotFoundException("Não há autores a serem listados")
    } 
    return autores;
}

async getDadosByAutor(id:number){
    const autor = await this.prisma.livro.findUnique({
        where:{id}
    })

    if(!autor){
        throw new NotFoundException("Autor não encontrado")
    }

    return autor;
}

async updateDadosAutor(id:number, updateAutorDto: UpdateAutorDto){
    const autor = await this.prisma.autor.findUnique({
        where:{id}
    })
    if(!autor){
        throw new NotFoundException("Autor não encontrado")
    }
    return this.prisma.autor.update({
        where:{id},
        data: updateAutorDto
    })
}

async deletarAutor(id:number){
    const autor = await this.prisma.autor.findUnique({
        where:{id}
    })
    if(!autor){
        throw new NotFoundException("Autor não encontrado")
    }
    return this.prisma.autor.delete({
        where:{id}
    })
}

}