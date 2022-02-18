import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mongooseSchema } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type UrlDocument = Url & Document;

@Schema({ timestamps: true, autoCreate: true })
export class Url extends Document {
  @Prop({ type: String, required: false })
  shortUrl: string;

  @Prop({ type: String, required: true })
  destinationUrl: string;

  @Prop({ type: Number, required: false, default: 0 })
  hits: string;

  @Prop({
    type: mongooseSchema.Types.ObjectId,
    ref: User.name,
    required: false,
    default: null,
  })
  user_fk: User;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
