import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../../libs/common/src/database/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'studies' })
export class StudySchema extends IdentifiableEntitySchema {
  @Prop()
  readonly name: string;

  @Prop()
  readonly classes: string[];
}
