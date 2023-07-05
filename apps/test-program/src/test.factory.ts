import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntityFactory } from '../../../libs/common/src/database/entity.factory';
import { Test } from './Test';
import { TestEntityRepository } from '../src/db/test-entity.repository';
import { TestCreatedEvent } from '../src/events/test-created.event';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractService } from '@app/common';
import { EventSource } from './event.schema';

@Injectable()
export class TestFactory implements EntityFactory<Test> {
  constructor(private readonly testEntityRepository: TestEntityRepository,     @InjectModel(EventSource.name)
  private readonly eventService: AbstractService<EventSource>,) {}

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

    // Event Sourcing
    const eventSource = new EventSource();
    eventSource.body = 'TestCreatedEvent';

    this.eventService.create(eventSource);

    return test;
  }
}
