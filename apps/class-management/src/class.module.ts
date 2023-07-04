import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { ClassFactory } from './class.factory';
import { ClassController } from './class.controller';
import { DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/services';
import { ClassCommandHandlers } from './commands';
import { ClassDtoRepository } from './db/class-dto.repository';
import { ClassEntityRepository } from './db/class-entity.repository';
import { ClassSchemaFactory } from './db/class-schema.factory';
import { ClassSchema } from './db/class.schema';
import { ConfigModule } from '@nestjs/config';
import { ClassEventHandlers } from './events';
import { ClassQueryHandlers } from './queries';
import { Teacher } from 'apps/student-management/src/schemas/teacher.schema';
import { TeacherSchema } from 'apps/student-management/src/schemas/teacher.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/class-management/.env',
    }),
    RmqModule.register({ name: APPLICATION_SERVICE }),
    DatabaseModule,
    CqrsModule,
    // Import MongooseModule and specify the schemas to be used
    MongooseModule.forFeature([
      {
        name: ClassSchema.name,
        schema: SchemaFactory.createForClass(ClassSchema),
      },
      { name: Teacher.name, schema: TeacherSchema },
    ]),
  ],
  controllers: [ClassController],
  providers: [
    ClassEntityRepository,
    ClassDtoRepository,
    ClassSchemaFactory,
    ClassFactory,
    ...ClassCommandHandlers,
    ...ClassEventHandlers,
    ...ClassQueryHandlers,
  ],
})
export class ClassModule {}
