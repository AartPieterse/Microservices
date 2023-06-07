import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../database/abstract.schema';

@Schema()
export class Meeting extends AbstractDocument {
  @Prop({ required: true })
  Date: Date;

  @Prop({ required: true })
  GuidanceTeacher: string;

  @Prop({ required: true })
  Student: string;

  @Prop()
  Notes: string;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
