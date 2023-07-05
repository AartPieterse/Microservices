import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntityFactory } from '../../../libs/common/src/database/entity.factory';
import { Module } from './Module';
import { ModuleEntityRepository } from './db/module-entity.repository';
import { ModuleCreatedEvent } from './events/module-created.event';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractService } from '@app/common';
import { EventSource } from './event.schema';

@Injectable()
export class ModuleFactory implements EntityFactory<Module> {
  constructor(
    private readonly moduleEntityRepository: ModuleEntityRepository,
    @InjectModel(EventSource.name)
    private readonly eventService: AbstractService<EventSource>,
  ) {}

  async create(
    name: string,
    teacher: string,
    classes: string[],
  ): Promise<Module> {
    const module = new Module(
      new ObjectId().toHexString(),
      name,
      teacher,
      classes,
    );
    await this.moduleEntityRepository.create(module);
    module.apply(new ModuleCreatedEvent(module.getId()));

    // Event Sourcing
    const eventSource = new EventSource();
    eventSource.body = 'ModuleCreatedEvent';

    this.eventService.create(eventSource);

    return module;
  }
}
