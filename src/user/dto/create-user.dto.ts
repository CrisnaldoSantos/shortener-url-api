import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: "User's email",
  })
  email: string;

  @IsNotEmpty()
  @MinLength(8, {
    message: 'Senha muito curta',
  })
  @ApiProperty({
    description: "User's password",
  })
  password: string;
}
