import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseEntityRepository } from '../../../../libs/common/src/database/base-entity.repository';
import { Study } from '../Study';
import { StudySchema } from './study.schema';
import { StudySchemaFactory } from './study-schema.factory';

@Injectable()
export class StudyEntityRepository extends BaseEntityRepository<
  StudySchema,
  Study
> {
  constructor(
    @InjectModel(StudySchema.name)
    studyModel: Model<StudySchema>,
    studySchemaFactory: StudySchemaFactory,
  ) {
    super(studyModel, studySchemaFactory);
  }
}
