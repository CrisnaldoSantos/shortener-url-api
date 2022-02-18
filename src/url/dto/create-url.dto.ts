import { Schema } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/schemas/user.schema';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUrlDto {
  @ApiProperty({ type: String, required: false, readOnly: true })
  shortUrl: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, required: true })
  destinationUrl: string;

  @ApiProperty({ type: Number, required: false, default: 0, readOnly: true })
  hits: string;

  @IsOptional()
  @IsMongoId()
  @ApiProperty({ type: Schema.Types.ObjectId, required: false, default: null })
  user_fk: User['_id'];
}
