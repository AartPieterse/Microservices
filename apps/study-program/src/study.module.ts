import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { StudyFactory } from './study.factory';
import { StudyController } from './study.controller';
import { AbstractService, DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/services';
import { StudyCommandHandlers } from './commands';
import { StudyDtoRepository } from './db/study-dto.repository';
import { StudyEntityRepository } from './db/study-entity.repository';
import { StudySchemaFactory } from './db/study-schema.factory';
import { StudySchema } from './db/study.schema';
import { ConfigModule } from '@nestjs/config';
import { StudyEventHandlers } from './events';
import { StudyQueryHandlers } from './queries';
import { Teacher } from 'apps/student-management/src/schemas/teacher.schema';
import { TeacherSchema } from 'apps/student-management/src/schemas/teacher.schema';
import { EventSource } from './event.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/study-program/.env',
    }),
    RmqModule.register({ name: APPLICATION_SERVICE }),
    DatabaseModule,
    CqrsModule,
    // Import MongooseModule and specify the schemas to be used
    MongooseModule.forFeature([
      {
        name: StudySchema.name,
        schema: SchemaFactory.createForClass(StudySchema),
      },
      { name: Teacher.name, schema: TeacherSchema },
    ]),
  ],
  controllers: [StudyController],
  providers: [
    StudyEntityRepository,
    StudyDtoRepository,
    StudySchemaFactory,
    StudyFactory,
    AbstractService<EventSource>, { provide: AbstractService, useClass: EventSource},
    ...StudyCommandHandlers,
    ...StudyEventHandlers,
    ...StudyQueryHandlers,
  ],
})
export class StudyModule {}
