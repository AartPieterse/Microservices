import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseEntityRepository } from '../../../../libs/common/src/database/base-entity.repository';
import { Test } from '../../src/Test';
import { TestSchema } from './test.schema';
import { TestSchemaFactory } from './test-schema.factory';

@Injectable()
export class TestEntityRepository extends BaseEntityRepository<
  TestSchema,
  Test
> {
  constructor(
    @InjectModel(TestSchema.name)
    testModel: Model<TestSchema>,
    testSchemaFactory: TestSchemaFactory,
  ) {
    super(testModel, testSchemaFactory);
  }
}
