import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntitySchemaFactory } from '../../../../libs/common/src/database/entity-schema.factory';
import { Module } from '../Module';
import { ModuleSchema } from './module.schema';

@Injectable()
export class ModuleSchemaFactory
  implements EntitySchemaFactory<ModuleSchema, Module>
{
  create(module: Module): ModuleSchema {
    return {
      _id: new ObjectId(module.getId()),
      name: module.getName(),
      teacher: module.getTeacher(),
      classes: module.getClasses(),
    };
  }

  createFromSchema(moduleSchema: ModuleSchema): Module {
    return new Module(
      moduleSchema._id.toHexString(),
      moduleSchema.name,
      moduleSchema.teacher,
      moduleSchema.classes,
    );
  }
}
