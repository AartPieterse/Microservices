import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PotentialStudent } from './potentialStudent.schema';
import { Teacher } from './teacher.schema';

@Schema()
export class Meeting extends AbstractDocument {
  @Prop({ required: true })
  student: PotentialStudent;

  @Prop({ required: true })
  teacher: Teacher;

  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  endTime: Date;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);