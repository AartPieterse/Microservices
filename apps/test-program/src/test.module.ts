import { Module, OnModuleInit } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { TestFactory } from './test.factory';
import { TestController } from '../src/test.controller';
import { AbstractService, DatabaseModule, RmqModule } from '@app/common';
import { TEST_SERVICE } from './constants/services';
import { TestCommandHandlers } from '../src/commands/';
import { TestDtoRepository } from '../src/db/test-dto.repository';
import { TestEntityRepository } from '../src/db/test-entity.repository';
import { TestSchemaFactory } from '../src/db/test-schema.factory';
import { TestSchema } from '../src/db/test.schema';
import { ConfigModule } from '@nestjs/config';
import { TestEventHandlers } from '../src/events';
import { TestQueryHandlers } from '../src/queries';
import {
  Teacher,
  TeacherSchema,
} from '../../student-management/src/schemas/teacher.schema';
import { EventSource, EventSourceSchema } from './event.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/test-program/.env',
    }),
    RmqModule.register({ name: TEST_SERVICE }),
    DatabaseModule,
    CqrsModule,
    // Import MongooseModule and specify the schemas to be used
    MongooseModule.forFeature([
      {
        name: TestSchema.name,
        schema: SchemaFactory.createForClass(TestSchema),
      },
      { name: Teacher.name, schema: TeacherSchema },
      { name: EventSource.name, schema: EventSourceSchema}
    ]),
  ],
  controllers: [TestController],
  providers: [
    TestEntityRepository,
    TestDtoRepository,
    TestSchemaFactory,
    TestFactory,
    AbstractService<EventSource>, { provide: AbstractService, useClass: EventSource},
    ...TestCommandHandlers,
    ...TestEventHandlers,
    ...TestQueryHandlers,
  ],
})
export class TestModule{}

