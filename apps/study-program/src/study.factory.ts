import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntityFactory } from '../../../libs/common/src/database/entity.factory';
import { Study } from './Study';
import { StudyEntityRepository } from './db/study-entity.repository';
import { StudyCreatedEvent } from './events/study-created.event';

@Injectable()
export class StudyFactory implements EntityFactory<Study> {
  constructor(private readonly studyEntityRepository: StudyEntityRepository) {}

  async create(
    name: string,
    classes: string[],
  ): Promise<Study> {
    const study = new Study(
      new ObjectId().toHexString(),
      name,
      classes,
    );
    await this.studyEntityRepository.create(study);
    study.apply(new StudyCreatedEvent(study.getId()));
    return study;
  }
}

