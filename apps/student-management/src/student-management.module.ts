// Import necessary modules and classes
import { Module } from '@nestjs/common';
import { StudentManagementController } from './student-management.controller';
import { StudentManagementService } from './student-management.service';
import { DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/services';
import { MongooseModule } from '@nestjs/mongoose';
import { PotentialStudent, PotentialStudentSchema} from './schemas/potentialStudent.schema';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { Teacher, TeacherSchema } from './schemas/teacher.schema';
import { TeacherModule } from './teacher/teacher.module';
import { MeetingModule } from './meeting/meeting.module';
import { PotentialStudentModule } from './potentialStudent/potentialStudent.module';

/**
 * @module StudentManagementModule
 * @description Module for managing student-related functionality.
 * It imports necessary dependencies, configures the module, and provides controllers and services.
 */
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }), RmqModule.register({name: APPLICATION_SERVICE}), DatabaseModule, CqrsModule, MongooseModule.forFeature([{name: PotentialStudent.name, schema: PotentialStudentSchema}, { name: Teacher.name, schema: TeacherSchema}]), TeacherModule, PotentialStudentModule, MeetingModule],
  controllers: [StudentManagementController],
  providers: [StudentManagementService],
})
export class StudentManagementModule {}
