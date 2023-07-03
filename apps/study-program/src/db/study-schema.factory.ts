import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntitySchemaFactory } from '../../../../libs/common/src/database/entity-schema.factory';
import { Study } from '../Study';
import { StudySchema } from './study.schema';

@Injectable()
export class StudySchemaFactory
  implements EntitySchemaFactory<StudySchema, Study>
{
  create(study: Study): StudySchema {
    return {
      _id: new ObjectId(study.getId()),
      name: study.getName(),
      classes: study.getClasses(),
    };
  }

  createFromSchema(studySchema: StudySchema): Study {
    return new Study(
      studySchema._id.toHexString(),
      studySchema.name,
      studySchema.classes,
    );
  }
}
