import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    type: String,
    required: true,
    description: "User's email",
  })
  email: string;

  @IsNotEmpty()
  @MinLength(8, {
    message: 'Senha muito curta',
  })
  @ApiProperty({
    type: String,
    minLength: 8,
    nullable: false,
    required: true,
    description: "User's password",
  })
  password: string;
}
