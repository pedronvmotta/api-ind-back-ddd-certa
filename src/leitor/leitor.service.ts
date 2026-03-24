import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLeitorDto } from './dto/create-leitor.dto';
import { UpdateLeitorDto } from './dto/update-leitor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeitorService {
    constructor(private prisma: PrismaService) {}

    async cadastrarLeitor(createLeitorDto: CreateLeitorDto) {
        return await this.prisma.leitor.create({
            data: {
                ...createLeitorDto,
                data_de_nascimento: new Date(createLeitorDto.data_de_nascimento)
            },
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
        })

        if (!leitor) {
            throw new NotFoundException('leitor não encontrado')
        }

        return this.prisma.leitor.update({
            where: { id },
            data: updateLeitorDto
        })
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