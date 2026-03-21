import { IsInt, IsString, IsDate } from "class-validator";
import { ApiProperty} from "@nestjs/swagger";

export class CreateLivroDto {
    @ApiProperty({
        description: "nome do livro",
        example: "Rlk da barra da tijuca : volume 2"
    })
    @IsString()
    nome_livro!:string;

    @ApiProperty({
        description: "editora do livro",
        example: "aquela lá do pinguim"
    })
    @IsString()
    editora!:string;

    @ApiProperty({
        description: "a versão do livro",
        example: "14"
    })
    @IsString()
    edicao!:number

    @ApiProperty({
        description: "o ano de lancamento do livro",
        example: "2023"
    })
    @IsInt()
    ano!:number

    @ApiProperty({
        description: "genero do livro",
        example: "ação"
    })
    @IsString()
    genero!:string

    @ApiProperty({
        description: "idioma",
        example: "pt-br"
    })
    @IsString()
    idioma!:string

    @ApiProperty({
        description: "quantidade total do livro (contando os não disponíveis no momento)",
        example: "10"
    })
    @IsInt()
    qtde_total!:number

    @ApiProperty({
        description: "quantidade disponivel no momento",
        example: "5"
    })
    @IsInt()
    qtde_disponivel!:number

    @ApiProperty({
        description: "id do autor",
        example: "id:1"
    })
    @IsInt()
    id_autor!:number
}