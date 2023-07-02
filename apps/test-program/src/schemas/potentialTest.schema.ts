import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

/**
 * Mongoose schema for the PotentialTest entity.
 */
@Schema()
export class PotentialTest extends AbstractDocument {
  /**
   * The module associated with the potential test.
   */
  @Prop({ required: true })
  module: string;

  /**
   * The name of the potential test.
   */
  @Prop({ required: true })
  name: string;

  /**
   * The duration of the potential test (in minutes).
   */
  @Prop({ required: true })
  duration: number;

  /**
   * The educational credits (EC) associated with the potential test.
   */
  @Prop({ required: true })
  ec: number;

  /**
   * An array of questions for the potential test.
   */
  @Prop({ required: true, type: [String] })
  questions: string[];

  /**
   * An array of answers corresponding to the questions of the potential test.
   */
  @Prop({ required: true, type: [String] })
  answers: string[];
}

/**
 * Mongoose schema definition for the PotentialTest entity.
 */
export const PotentialTestSchema = SchemaFactory.createForClass(PotentialTest);
