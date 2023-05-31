import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop()
  StudentId: string;

  @Prop()
  Email: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
