import { IsInt, IsString, IsDate, IsNumber } from "class-validator";
import { ApiProperty} from "@nestjs/swagger";
import {Type} from 'class-transformer'

export class CreateEmprestimoDto {

    @ApiProperty({
        description: "essa é a data de empréstimo",
        example: "2025-11-19"
    })
    @IsDate()
    @Type(()=> Date)
    data_emprestimo!: Date;

    @ApiProperty({
        description: "esse é o prazo que o leitor tem pra devolver, ou seja, é o final do empréstimo",
        example: "2025-11-19"
    })
    @IsDate()
    @Type(()=> Date)
    prazo_de_devolucao!:Date;

    @ApiProperty({
        description: "observações que o usuário pode ou não fazer",
        example: "o vitor é uma figura paterna, e o livro é bom"
    })
    @IsString()
    observacoes !: string;

    @ApiProperty({
        description: "id do leitor que pegou emprestado",
        example: "1"
    })
    @IsNumber()
    id_leitor !:number;

}

