import { IsString, IsInt, IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  userName:string;

  @IsEmail()
  @IsNotEmpty()
  email:string

  @IsNotEmpty()
  @IsStrongPassword()
  password:string
}