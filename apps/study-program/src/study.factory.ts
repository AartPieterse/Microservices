import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntityFactory } from '../../../libs/common/src/database/entity.factory';
import { Study } from './Study';
import { StudyEntityRepository } from './db/study-entity.repository';
import { StudyCreatedEvent } from './events/study-created.event';
import { AbstractService } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { EventSource } from './event.schema';

@Injectable()
export class StudyFactory implements EntityFactory<Study> {
  constructor(
    private readonly studyEntityRepository: StudyEntityRepository,
    @InjectModel(EventSource.name)
    private readonly eventService: AbstractService<EventSource>,
  ) {}

  async create(name: string, classes: string[]): Promise<Study> {
    const study = new Study(new ObjectId().toHexString(), name, classes);
    await this.studyEntityRepository.create(study);
    study.apply(new StudyCreatedEvent(study.getId()));

    // Event Sourcing
    const eventSource = new EventSource();
    eventSource.body = 'StudyCreatedEvent';

    this.eventService.create(eventSource);

    return study;
  }
}
