// Import necessary modules and classes
import { AbstractDocument } from "@app/common";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

/**
 * @description Mongoose schema for the Teacher class.
 * Inherits from the AbstractDocument class.
 */
@Schema()
export class Teacher extends AbstractDocument {
  /**
   * @description Property representing the name of the teacher.
   * Required validation is applied.
   */
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  study: string;
}

/**
 * @description Mongoose schema for the Teacher class created using SchemaFactory.
 */
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
