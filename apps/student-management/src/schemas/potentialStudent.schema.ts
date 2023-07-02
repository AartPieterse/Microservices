import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema()
export class PotentialStudent extends AbstractDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  study: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true})
  birthday: Date;
}

export const PotentialStudentSchema = SchemaFactory.createForClass(PotentialStudent);
