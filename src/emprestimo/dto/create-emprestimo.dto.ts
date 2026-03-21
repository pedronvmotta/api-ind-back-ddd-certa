import { IsInt, IsString, IsDate } from "class-validator";
import { ApiProperty} from "@nestjs/swagger";

export class CreateEmprestimoDto {
    @ApiProperty({
        description: "esse é o id do empréstimo",
        example: "id:1"
    })
    @IsInt()
    id_emprestimo!: number;

    @ApiProperty({
        description: "essa é a data de empréstimo",
        example: 19/11/2025
    })
    @IsDate()
    data_emprestimo!: Date;

    @ApiProperty({
        description: "esse é o prazo que o leitor tem pra devolver, ou seja, é o final do empréstimo",
        example: 25/11/2025
    })
    @IsDate()
    prazo_de_devolucao!:Date;

    @ApiProperty({
        description: "observações que o usuário pode ou não fazer",
        example: "o vitor é uma figura paterna, e o livro é bom"
    })
    @IsString()
    observacoes !: string;

    @ApiProperty({
        description: "id do leitor que pegou emprestado",
        example: "id : 1"
    })
    @IsInt()
    id_leitor !: number;

}

