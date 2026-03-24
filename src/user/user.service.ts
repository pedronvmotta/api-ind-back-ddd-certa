import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) {}

  async cadastrarUsuario(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)

    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    })
  }

  async listarUsuarios() {
    const usuarios = await this.prisma.user.findMany()

    if (!usuarios || usuarios.length === 0) {
      throw new NotFoundException("não há usuários a serem listados")
    }

    return usuarios;
  }

  async getDadosByUsuario(id: number) {
    const usuario = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!usuario) {
      throw new NotFoundException("usuário não encontrado")
    }

    return usuario;
  }

  async updateDadosUsuario(id: number, updateUserDto: UpdateUserDto) {
    const usuario = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!usuario) {
      throw new NotFoundException("usuário não encontrado")
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto
    })
  }

  async deletarUsuario(id: number) {
    const usuario = await this.prisma.user.findUnique({
      where: { id }
    })

    if (!usuario) {
      throw new NotFoundException("usuário não encontrado")
    }

    return this.prisma.user.delete({
      where: { id }
    })
  }
}