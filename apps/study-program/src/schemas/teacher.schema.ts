import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "src/database/abstract.schema";

@Schema()
export class Teacher extends AbstractDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);