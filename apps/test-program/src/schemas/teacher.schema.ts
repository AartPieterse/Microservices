import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

/**
 * Mongoose schema for the Teacher entity.
 */
@Schema()
export class Teacher extends AbstractDocument {
  /**
   * The name of the teacher.
   */
  @Prop({ required: true })
  name: string;
}

/**
 * Mongoose schema definition for the Teacher entity.
 */
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
