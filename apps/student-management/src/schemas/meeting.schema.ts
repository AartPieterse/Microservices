import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PotentialStudent } from './potentialStudent.schema';
import { Teacher } from './teacher.schema';

/**
 * Schema for the Meeting collection.
 */
@Schema()
export class Meeting extends AbstractDocument {
  @Prop({ required: true, type: PotentialStudent })
  student: PotentialStudent;

  @Prop({ required: true, type: Teacher })
  teacher: Teacher;

  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  endTime: Date;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
