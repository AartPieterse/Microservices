// Import necessary modules and classes from external packages
import { Module } from '@nestjs/common';
import { TestProgramController } from './test-program.controller';
import { TestProgramService } from './test-program.service';
import { DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/services';
import { MongooseModule } from '@nestjs/mongoose';
import { PotentialTest, PotentialTestSchema } from './schemas/potentialTest.schema';
import { TestProgramRepository } from './test-program.repository';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { PotentialTestRegisteredEventHandler } from './events/potentialTest-registered.event.handler';
import { CreatePotentialTestCommandHandler } from './commands/create-potentialTest.command.handler';
import { Teacher, TeacherSchema } from './schemas/teacher.schema';
import { TeacherModule } from 'apps/student-management/src/teacher/teacher.module';

@Module({
  // Import and configure modules for the TestProgramModule
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/test-program/.env',
    }),
    RmqModule.register({ name: APPLICATION_SERVICE }),
    DatabaseModule,
    CqrsModule,
    // Import MongooseModule and specify the schemas to be used
    MongooseModule.forFeature([
      { name: PotentialTest.name, schema: PotentialTestSchema },
      { name: Teacher.name, schema: TeacherSchema },
    ]),
  ],
  // Specify the controllers to be included in the TestProgramModule
  controllers: [TestProgramController],
  // Specify the services and repositories to be included in the TestProgramModule
  providers: [
    TestProgramService,
    TestProgramRepository,
    PotentialTestRegisteredEventHandler,
    CreatePotentialTestCommandHandler,
  ],
})
export class TestProgramModule {}
