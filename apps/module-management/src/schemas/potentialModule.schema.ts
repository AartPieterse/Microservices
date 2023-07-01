import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Teacher } from 'apps/student-management/src/schemas/teacher.schema';
import { PotentialClass } from 'apps/class-management/src/schemas/potentialClass.schema';

@Schema()
export class PotentialModule extends AbstractDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  teacher: Teacher;

  @Prop({ required: true})
  class: PotentialClass;


}

export const PotentialModuleSchema = SchemaFactory.createForClass(PotentialModule);