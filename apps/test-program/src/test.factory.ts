import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntityFactory } from '../../../libs/common/src/database/entity.factory';
import { Test } from './Test';
import { TestEntityRepository } from '../src/db/test-entity.repository';
import { TestCreatedEvent } from '../src/events/test-created.event';

@Injectable()
export class TestFactory implements EntityFactory<Test> {
  constructor(private readonly testEntityRepository: TestEntityRepository) {}

  async create(
    name: string,
    module: string,
    duration: number,
    ec: number,
    questions: string[],
    answers: string[],
  ): Promise<Test> {
    const test = new Test(
      new ObjectId().toHexString(),
      name,
      module,
      duration,
      ec,
      questions,
      answers,
    );
    await this.testEntityRepository.create(test);
    test.apply(new TestCreatedEvent(test.getId()));
    return test;
  }
}
