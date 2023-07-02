import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Teacher extends AbstractDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  study: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);