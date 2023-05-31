import { Module } from '@nestjs/common';
import { StudentManagementController } from './student-management.controller';
import { StudentManagementService } from './student-management.service';
import { DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/services';
import { MongooseModule } from '@nestjs/mongoose';
import { PotentialStudent, PotentialStudentSchema} from './schemas/potentialStudent.schema';
import { StudentManagementRepository } from './student-management.repository';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { PotentialStudentRegisteredEventHandler } from './events/potentialStudent-registered.event.handler';
import { CreatePotentialStudentCommandHandler } from './commands/create-potentialStudent/create-potentialStudent.command.handler';
import { Teacher, TeacherSchema } from './schemas/teacher.schema';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }), RmqModule.register({name: APPLICATION_SERVICE}), DatabaseModule, CqrsModule, MongooseModule.forFeature([{name: PotentialStudent.name, schema: PotentialStudentSchema}, { name: Teacher.name, schema: TeacherSchema}])],
  controllers: [StudentManagementController],
  providers: [StudentManagementService, StudentManagementRepository, PotentialStudentRegisteredEventHandler, CreatePotentialStudentCommandHandler],
})
export class StudentManagementModule {}
