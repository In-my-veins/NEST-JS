import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    name: string;
    email: string;
    role: "INTERN" | "ENGINEER" | "ADMIN";
}
