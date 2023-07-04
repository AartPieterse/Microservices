import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../../libs/common/src/database/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'campers' })
export class TestSchema extends IdentifiableEntitySchema {
  @Prop()
  readonly name: string;

  @Prop()
  readonly module: string;

  @Prop()
  readonly duration: number;

  @Prop()
  readonly ec: number;

  @Prop()
  readonly questions: string[];

  @Prop()
  readonly answers: string[];
}
