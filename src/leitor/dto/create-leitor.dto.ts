import { IsInt, IsString, IsDate, IsOptional, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import {Type} from 'class-transformer';

export class CreateLeitorDto {

    @ApiProperty({ description: "nome do leitor", example: "vitor" })
    @IsString()
    nome!: string;

    @ApiProperty({description: "email do leitor", example: "vitor@example.com"})
    @IsEmail()
    email!:string;

    @ApiProperty({ description: "cpf do leitor", example: "123.456.789-00" })
    @IsString()
    cpf!: string;

    @ApiProperty({ description: "data de nascimento", example: "2005-11-19" })
    @Type(()=> Date)
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