import { IsEmail, IsString, IsDate, IsEnum } from "class-validator"
import { Role } from "src/generated/prisma"

export class CreateUserDto {

    @IsEmail()
    email!:string

    @IsString()
    password!:string

    @IsEnum(Role)
    role!: Role

    @IsDate()
    created_at!: Date

}
