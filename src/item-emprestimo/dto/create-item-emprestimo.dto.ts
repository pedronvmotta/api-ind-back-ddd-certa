import { IsInt, IsString, IsDate, IsIn } from "class-validator";
import { ApiProperty} from "@nestjs/swagger";
import { Type } from "class-transformer";

export class CreateItemEmprestimoDto {

    @ApiProperty({
        description: "data de devolucao",
        example: "1-12-26"
    })
    @IsDate()
    @Type(()=> Date)
    data_de_devolucao!: Date;

    @ApiProperty({
        description: "valor da multa caso o livro seja devolvido atrasado",
        example: 10
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
        example: "1"
    })
    @IsInt()
    id_emprestimo!:number;

    @ApiProperty({
        description: "id do livro",
        example: "1"
    })
    @IsInt()
    id_livro!:number;

}
