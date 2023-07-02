import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { PotentialStudent } from 'apps/student-management/src/schemas/potentialStudent.schema';

/**
 * Schema for representing a potential class.
 */
@Schema()
export class PotentialClass extends AbstractDocument {
  /**
   * The name of the potential class.
   */
  @Prop({ required: true })
  name: string;

  /**
   * The student associated with the potential class.
   */
  @Prop({ required: true })
  student: PotentialStudent;
}

/**
 * Mongoose schema for the PotentialClass class.
 */
export const PotentialClassSchema = SchemaFactory.createForClass(PotentialClass);
