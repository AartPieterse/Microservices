import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseEntityRepository } from '../../../../libs/common/src/database/base-entity.repository';
import { Class } from '../Class';
import { ClassSchema } from './class.schema';
import { ClassSchemaFactory } from './class-schema.factory';

@Injectable()
export class ClassEntityRepository extends BaseEntityRepository<
  ClassSchema,
  Class
> {
  constructor(
    @InjectModel(ClassSchema.name)
    classModel: Model<ClassSchema>,
    classSchemaFactory: ClassSchemaFactory,
  ) {
    super(classModel, classSchemaFactory);
  }
}
