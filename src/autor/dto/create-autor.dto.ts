import { IsInt, IsString, IsDate } from "class-validator";
import { ApiProperty, ApiTags } from "@nestjs/swagger";

export class CreateAutorDto {

    @ApiProperty({
        description: "esse campo é o id do autor",
        example: "id:1"
    })
    @IsInt()
    id_autor!:number;

    @ApiProperty({
        description: "aqui é o nome do autor",
        example: "joão"
    })
    @IsString()
    nome_autor!: string;

    @ApiProperty({
        description: "aqui é o país de origem do autor",
        example: "dinamarca"
    })
    @IsString()
    origem!: string;

    // continuar a partir daqui (olha seu MER no lucid chart)



    
    
}
