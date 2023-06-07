import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TeacherDocument = HydratedDocument<GuidanceTeacher>;

@Schema()
export class GuidanceTeacher {
  @Prop()
  TeacherId: string;

  @Prop()
  Email: string;

  @Prop()
  Name: string;
}

export const GuidanceTeacherSchema = SchemaFactory.createForClass(GuidanceTeacher);
