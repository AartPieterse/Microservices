import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntityFactory } from '../../../libs/common/src/database/entity.factory';
import { Class } from './Class';
import { ClassEntityRepository } from './db/class-entity.repository';
import { ClassCreatedEvent } from './events/class-created.event';

@Injectable()
export class ClassFactory implements EntityFactory<Class> {
  constructor(private readonly classEntityRepository: ClassEntityRepository) {}

  async create(
    name: string,
    students: string[],
    modules: string[],
  ): Promise<Class> {
    const newClass = new Class(
      new ObjectId().toHexString(),
      name,
      students,
      modules,
    );
    await this.classEntityRepository.create(newClass);
    newClass.apply(new ClassCreatedEvent(newClass.getId()));
    return newClass;
  }
}
