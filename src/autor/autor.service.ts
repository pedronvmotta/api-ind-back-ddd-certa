import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAutorDto } from './dto/update-autor.dto';

@Injectable()
export class AutorService {
    
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