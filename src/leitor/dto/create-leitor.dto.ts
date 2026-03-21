import { IsInt, IsString, IsDate } from "class-validator";
import { ApiProperty} from "@nestjs/swagger";

export class CreateLeitorDto {

    @ApiProperty({
        description: "email do leitor",
        example: "vitor@example.com"
    })
    @IsString()
    email!:string;

    @ApiProperty({
        description: "nome do leitor",
        example: "vitor"
    })
    @IsString()
    nome!:string;

    @ApiProperty({
        description: "cpf do leitor",
        example: "123.456.789-00"
    })
    @IsString()
    cpf!:string;

    @ApiProperty({
        description: "data de nascimento do leitor",
        example: 19/11/2005
    })
    @IsDate()
    data_de_nascimento!: Date;

    @ApiProperty({
        description: "endereco do leitor",
        example: "rua 1, numero 1, bairro 1, cidade 1, estado 1, cep 1"
    })
    @IsString()
    endereco!:string;

    @ApiProperty({
        description: "observações que o usuário pode ou não fazer",
        example: "o vitor é uma figura paterna"
    })
    @IsString()
    observacoes !: string;
}