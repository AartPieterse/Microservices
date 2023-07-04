import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseEntityRepository } from '../../../../libs/common/src/database/base-entity.repository';
import { Module } from '../Module';
import { ModuleSchema } from './module.schema';
import { ModuleSchemaFactory } from './module-schema.factory';

@Injectable()
export class ModuleEntityRepository extends BaseEntityRepository<
  ModuleSchema,
  Module
> {
  constructor(
    @InjectModel(ModuleSchema.name)
    moduleModel: Model<ModuleSchema>,
    moduleSchemaFactory: ModuleSchemaFactory,
  ) {
    super(moduleModel, moduleSchemaFactory);
  }
}
