import { IsInt, IsString, IsDate, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLeitorDto {

    @ApiProperty({ description: "id do usuário vinculado", example: 1 })
    @IsInt()
    id_user!: number;

    @ApiProperty({ description: "nome do leitor", example: "vitor" })
    @IsString()
    nome!: string;

    @ApiProperty({ description: "cpf do leitor", example: "123.456.789-00" })
    @IsString()
    cpf!: string;

    @ApiProperty({ description: "data de nascimento", example: "2005-11-19" })
    @IsDate()
    data_de_nascimento!: Date;

    @ApiProperty({ description: "endereço do leitor", example: "rua 1, numero 1, bairro 1" })
    @IsString()
    endereco!: string;

    @ApiProperty({ description: "observações opcionais", example: "o vitor é uma figura paterna", required: false })
    @IsOptional()
    @IsString()
    observacao?: string;
}