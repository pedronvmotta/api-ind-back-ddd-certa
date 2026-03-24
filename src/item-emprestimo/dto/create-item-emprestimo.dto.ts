import { IsInt, IsString, IsDate, IsIn } from "class-validator";
import { ApiProperty} from "@nestjs/swagger";

export class CreateItemEmprestimoDto {

    @ApiProperty({
        description: "data de devolucao",
        example: 1/12/26
    })
    @IsDate()
    data_de_devolucao!: Date;

    @ApiProperty({
        description: "valor da multa caso o livro seja devolvido atrasado",
        example: 10.50
    })
    @IsInt()
    valor_multa!: number;

    @ApiProperty({
        description: "status atual do empréstimo",
        example: "terminado"
    })
    @IsString()
    status !: string;

    @ApiProperty({
        description: "id do emprestimo",
        example: "id:1"
    })
    @IsInt()
    id_emprestimo!:number;

    @ApiProperty({
        description: "id do livro",
        example: "id:1"
    })
    @IsInt()
    id_livro!:number;

}
