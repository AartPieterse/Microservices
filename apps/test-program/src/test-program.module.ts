import { Module } from '@nestjs/common';
import { TestProgramController } from './test-program.controller';
import { TestProgramService } from './test-program.service';
import { DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/services';
import { MongooseModule } from '@nestjs/mongoose';
import { PotentialTest, PotentialTestSchema} from './schemas/potentialTest.schema';
import { TestProgramRepository } from './test-program.repository';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { PotentialTestRegisteredEventHandler } from './events/potentialTest-registered.event.handler';
import { CreatePotentialTestCommandHandler } from './commands/create-potentialTest.command.handler';
import { Teacher, TeacherSchema } from './schemas/teacher.schema';
import { TeacherModule } from 'apps/student-management/src/teacher/teacher.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }), RmqModule.register({name: APPLICATION_SERVICE}), DatabaseModule, CqrsModule, MongooseModule.forFeature([{name: PotentialTest.name, schema: PotentialTestSchema}, { name: Teacher.name, schema: TeacherSchema}])],
  controllers: [TestProgramController],
  providers: [TestProgramService, TestProgramRepository, PotentialTestRegisteredEventHandler, CreatePotentialTestCommandHandler],
})
export class TestProgramModule {}
