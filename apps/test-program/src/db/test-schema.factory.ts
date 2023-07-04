import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntitySchemaFactory } from '../../../../libs/common/src/database/entity-schema.factory';
import { Test } from '../Test';
import { TestSchema } from './test.schema';

@Injectable()
export class TestSchemaFactory
  implements EntitySchemaFactory<TestSchema, Test>
{
  create(test: Test): TestSchema {
    return {
      _id: new ObjectId(test.getId()),
      name: test.getName(),
      module: test.getModule(),
      duration: test.getDuration(),
      ec: test.getEc(),
      questions: test.getQuestions(),
      answers: test.getAnswers(),
    };
  }

  createFromSchema(testSchema: TestSchema): Test {
    return new Test(
      testSchema._id.toHexString(),
      testSchema.name,
      testSchema.module,
      testSchema.duration,
      testSchema.ec,
      testSchema.questions,
      testSchema.answers,
    );
  }
}
