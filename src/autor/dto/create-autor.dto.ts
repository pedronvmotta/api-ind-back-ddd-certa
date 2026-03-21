import { IsInt, IsString, IsDate } from "class-validator";
import { ApiProperty} from "@nestjs/swagger";

export class CreateAutorDto {


    @ApiProperty({
        description: "aqui é o nome do autor",
        example: "antonio"
    })
    @IsString()
    nome_autor!: string;

    @ApiProperty({
        description: "aqui é o país de origem do autor",
        example: "dinamarca"
    })
    @IsString()
    origem!: string;

    @ApiProperty({
        description: "biografia do autor",
        example: "victor souza cruz foi um inventor do século 18 que inventou a resenha e o eletromagnetismo"
    })
    @IsString()
    biografia!: string;

    @ApiProperty({
        description: "data de nascimento do autor",
        example: 19/11/2005
    })
    @IsDate()
    data_de_nascimento!: Date;

    @ApiProperty({
        description: "nome artistico do autor",
        example: "tom"
    })
    @IsString()
    nome_artistico!: string;
    
}
