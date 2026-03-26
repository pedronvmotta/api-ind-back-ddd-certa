import { IsString, IsDateString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateAutorDto {
  @ApiProperty({ description: 'nome do autor', example: 'Antonio' })
  @IsString()
  nome_autor!: string;

  @ApiProperty({ description: 'país de origem do autor', example: 'Dinamarca' })
  @IsString()
  origem!: string;

  @ApiProperty({ description: 'biografia do autor', example: 'Foi um inventor...' })
  @IsString()
  biografia!: string;

  @ApiProperty({ description: 'data de nascimento do autor', example: '2005-11-19' })
  @IsDateString()
  data_de_nascimento!: string;

  @ApiProperty({ description: 'nome artístico do autor', example: 'Tom' })
  @IsString()
  nome_artistico!: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Type(() => Number)
  id_livro: number; // estava faltando isso
}