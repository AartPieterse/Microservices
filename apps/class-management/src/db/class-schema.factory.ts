import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntitySchemaFactory } from '../../../../libs/common/src/database/entity-schema.factory';
import { Class } from '../Class';
import { ClassSchema } from './class.schema';

@Injectable()
export class ClassSchemaFactory
  implements EntitySchemaFactory<ClassSchema, Class>
{
  create(classObj: Class): ClassSchema {
    return {
      _id: new ObjectId(classObj.getId()),
      name: classObj.getName(),
      students: classObj.getStudents(),
      modules: classObj.getModules(),
    };
  }

  createFromSchema(classSchema: ClassSchema): Class {
    return new Class(
      classSchema._id.toHexString(),
      classSchema.name,
      classSchema.students,
      classSchema.modules,
    );
  }
}
