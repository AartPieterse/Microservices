import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { PotentialStudent } from 'apps/student-management/src/schemas/potentialStudent.schema';

@Schema()
export class PotentialClass extends AbstractDocument {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  student: PotentialStudent;

}

export const PotentialClassSchema = SchemaFactory.createForClass(PotentialClass);
