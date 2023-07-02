// Import necessary modules and classes
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

/**
 * @description Mongoose schema for the PotentialStudent class.
 * Inherits from the AbstractDocument class.
 */
@Schema()
export class PotentialStudent extends AbstractDocument {
  /**
   * @description Property representing the name of the potential student.
   * Required validation is applied.
   */
  @Prop({ required: true })
  name: string;

  /**
   * @description Property representing the study of the potential student.
   * Required validation is applied.
   */
  @Prop({ required: true })
  study: string;

  /**
   * @description Property representing the phone number of the potential student.
   * Required validation is applied.
   */
  @Prop({ required: true })
  phoneNumber: string;

  /**
   * @description Property representing the email of the potential student.
   * Required validation is applied.
   */
  @Prop({ required: true })
  email: string;
}

/**
 * @description Mongoose schema for the PotentialStudent class created using SchemaFactory.
 */
export const PotentialStudentSchema = SchemaFactory.createForClass(PotentialStudent);
