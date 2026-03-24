import { IsEmail, IsString, IsDate } from "class-validator"
import { Role } from "src/generated/prisma"

export class CreateUserDto {

    @IsEmail()
    email!:string

    @IsString()
    password!:string

    @IsString()
    role!: Role

    @IsDate()
    created_at!: Date

}
