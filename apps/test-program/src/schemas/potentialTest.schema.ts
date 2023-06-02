import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema()
export class PotentialTest extends AbstractDocument {
  @Prop({ required: true })
  module: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  ec: number;

  @Prop({ required: true, type: [String] })
  questions: string[];

  @Prop({ required: true, type: [String] })
  answers: string[];
}

export const PotentialTestSchema = SchemaFactory.createForClass(PotentialTest);
