import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../../libs/common/src/database/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'classes' })
export class ClassSchema extends IdentifiableEntitySchema {
  @Prop()
  readonly name: string;

  @Prop()
  readonly students: string[];

  @Prop()
  readonly modules: string[];
}
