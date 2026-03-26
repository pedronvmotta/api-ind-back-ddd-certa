import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, IsDate, IsEnum } from "class-validator"
import {Type} from  'class-transformer'

export class CreateUserDto {

    @ApiProperty({
        description: "email do usuário", 
        example: "vitor@example.com"
    })
    @IsEmail()
    email!:string

    @ApiProperty({
        description:"senha do usuário",
        example: "undaia"
    })
    @IsString()
    password!:string

}
