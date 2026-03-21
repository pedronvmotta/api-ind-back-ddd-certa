import { ApiProperty } from "@nestjs/swagger";
export class CreateLivroDto {
    @ApiProperty(
       { description: "eu sou isso pra guardar o nome dos outros"}
    )
    name!:string;

    @ApiProperty()
    email!: string;

    @ApiProperty()
    passsword!: string;
}
