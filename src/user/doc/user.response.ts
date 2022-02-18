import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({ description: 'User id' })
  _id: string;

  @ApiProperty({ description: 'User email', required: true })
  email: string;

  @ApiProperty({
    description: "User's password",
    required: true,
  })
  password: string;

  @ApiProperty({
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Update date',
  })
  updatedAt: Date;
}
