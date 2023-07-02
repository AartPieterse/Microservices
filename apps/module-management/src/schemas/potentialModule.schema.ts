import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Teacher } from 'apps/student-management/src/schemas/teacher.schema';
import { PotentialClass } from 'apps/class-management/src/schemas/potentialClass.schema';

/**
 * Mongoose schema for the PotentialModule entity.
 */
@Schema()
export class PotentialModule extends AbstractDocument {
  /**
   * Name of the potential module.
   */
  @Prop({ required: true })
  name: string;

  /**
   * Teacher associated with the potential module.
   */
  @Prop({ required: true })
  teacher: Teacher;

  /**
   * Class associated with the potential module.
   */
  @Prop({ required: true})
  class: PotentialClass;
}

/**
 * Mongoose schema for the PotentialModule entity.
 */
export const PotentialModuleSchema = SchemaFactory.createForClass(PotentialModule);
