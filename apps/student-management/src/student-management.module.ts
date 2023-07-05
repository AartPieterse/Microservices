// Import necessary modules and classes
import { Module } from '@nestjs/common';
import { StudentManagementController } from './student-management.controller';
import { StudentManagementService } from './student-management.service';
import { AbstractService, DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/services';
import { MongooseModule } from '@nestjs/mongoose';
import { PotentialStudent, PotentialStudentSchema} from './schemas/potentialStudent.schema';
import { ConfigModule } from '@nestjs/config';
import { Teacher, TeacherSchema } from './schemas/teacher.schema';
import { TeacherModule } from './teacher/teacher.module';
import { TeacherService } from './teacher/teacher.service';
import { CqrsModule } from '@nestjs/cqrs/dist/cqrs.module';
import { CommandHandlers } from './commands';
import { EventHandlers } from './events';
import { QueryHandlers } from './queries';
import { EventSource, EventSourceSchema } from './schemas/event.schema';

/**
 * @module StudentManagementModule
 * @description Module for managing student-related functionality.
 * It imports necessary dependencies, configures the module, and provides controllers and services.
 */
@Module({
  imports: [CqrsModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }), RmqModule.register({name: APPLICATION_SERVICE}), DatabaseModule, CqrsModule, MongooseModule.forFeature([{name: PotentialStudent.name, schema: PotentialStudentSchema}, { name: Teacher.name, schema: TeacherSchema}, { name: EventSource.name, schema: EventSourceSchema}]), TeacherModule],
  controllers: [StudentManagementController],
  providers: [StudentManagementService, AbstractService<PotentialStudent>, AbstractService<EventSource>, { provide: AbstractService, useClass: PotentialStudent}, { provide: AbstractService, useClass: EventSource}, TeacherService, ...CommandHandlers, ...EventHandlers, ...QueryHandlers],
})
export class StudentManagementModule {
}
