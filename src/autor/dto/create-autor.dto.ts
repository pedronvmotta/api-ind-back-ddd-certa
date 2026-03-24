import { IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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
}