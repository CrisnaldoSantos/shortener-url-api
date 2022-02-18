import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty({
    type: String,
    description: "User's access token",
  })
  access_token: string;

  @ApiProperty({
    description: "User's info",
    type: Object,
  })
  user: {
    _id: string;
    email: string;
  };
}
