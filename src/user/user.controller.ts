import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('usuarios')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/cadastro")
  @ApiOperation({ summary: "loga o usuario" })
  @ApiResponse({ status: 201, description: "usuario cadastrado com sucesso" })
  @ApiResponse({ status: 400, description: "dados inválidos" })
  cadastrarUsuario(@Body() createUserDto: CreateUserDto) {
    return this.userService.cadastrarUsuario(createUserDto)
  }

  @Get("/listar-todos")
  @ApiOperation({ summary: "lista todos os usuarios" })
  @ApiResponse({ status: 200, description: "usuarios listados com sucesso" })
  @ApiResponse({ status: 404, description: "não há usuários a serem listados" })
  listarUsuarios() {
    return this.userService.listarUsuarios()
  }

  @Get('/pegar-dados-usuario/:id')
  @ApiOperation({ summary: "pega os dados do usuario" })
  @ApiResponse({ status: 200, description: "dados do usuario pegos com sucesso" })
  @ApiResponse({ status: 404, description: "usuário não encontrado" })
  @ApiParam({ name: "id", type: String })
  getDadosByUsuario(@Param('id') id: string) { // faltava @Param
    return this.userService.getDadosByUsuario(+id)
  }

  @Patch('/atualizar-dados-usuario/:id')
  @ApiOperation({ summary: "atualiza os dados do usuario" })
  @ApiResponse({ status: 200, description: "dados do usuario atualizados com sucesso" })
  @ApiResponse({ status: 404, description: "usuário não encontrado" })
  @ApiParam({ name: "id", type: String })
  updateDadosUsuario(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) { // faltava @Param
    return this.userService.updateDadosUsuario(+id, updateUserDto)
  }

  @Delete('/deletar-usuario/:id')
  @ApiOperation({ summary: "deleta o usuario" })
  @ApiResponse({ status: 200, description: "usuario deletado com sucesso" })
  @ApiResponse({ status: 404, description: "usuário não encontrado" })
  @ApiParam({ name: "id", type: String })
  deletarUsuario(@Param('id') id: string) { // faltava @Param
    return this.userService.deletarUsuario(+id)
  }
}