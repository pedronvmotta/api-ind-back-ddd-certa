import { IsEmail, IsString, IsDate, IsEnum } from "class-validator"

export class CreateUserDto {

    @IsEmail()
    email!:string

    @IsString()
    password!:string

    
    @IsDate()
    created_at!: Date

}
