import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../../libs/common/src/database/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'modules' })
export class ModuleSchema extends IdentifiableEntitySchema {
  @Prop()
  readonly name: string;

  @Prop()
  readonly teacher: string;

  @Prop()
  readonly classes: string[];
}
