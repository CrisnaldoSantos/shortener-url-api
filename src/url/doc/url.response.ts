import { Schema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/schemas/user.schema';

export class UrlResponse {
  @ApiProperty({ description: 'Urls id' })
  _id: string;

  @ApiProperty({ type: String, required: false })
  shortUrl: string;

  @ApiProperty({ type: String, required: true })
  destinationUrl: string;

  @ApiProperty({ type: Number, required: false, default: 0 })
  hits: string;

  @ApiProperty({ type: Schema.Types.ObjectId, required: false, default: null })
  user_fk: User;

  @ApiProperty({
    description: 'Creation date',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Update date',
  })
  updatedAt: Date;
}
