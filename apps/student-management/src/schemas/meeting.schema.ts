import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Meeting extends AbstractDocument {
  @Prop({ required: true })
  studentId: string;

  @Prop({ required: true })
  teacherId: string;

  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  endTime: Date;

  @Prop({ default: false })
  match: boolean;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);