import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema()
export class PotentialTest extends AbstractDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  study: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  email: string;
}

export const PotentialTestSchema = SchemaFactory.createForClass(PotentialTest);
