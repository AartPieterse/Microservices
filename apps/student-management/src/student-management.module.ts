// Import necessary modules and classes
import { Module } from '@nestjs/common';
import { StudentManagementController } from './student-management.controller';
import { StudentManagementService } from './student-management.service';
import { DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/services';
import { MongooseModule } from '@nestjs/mongoose';
import { PotentialStudent, PotentialStudentSchema } from './schemas/potentialStudent.schema';
import { StudentManagementRepository } from './student-management.repository';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { PotentialStudentRegisteredEventHandler } from './events/potentialStudent-registered.event.handler';
import { CreatePotentialStudentCommandHandler } from './commands/create-potentialStudent/create-potentialStudent.command.handler';
import { Teacher, TeacherSchema } from './schemas/teacher.schema';
import { TeacherModule } from './teacher/teacher.module';

/**
 * @module StudentManagementModule
 * @description Module for managing student-related functionality.
 * It imports necessary dependencies, configures the module, and provides controllers and services.
 */
@Module({
  // Configure the module imports
  imports: [
    /**
     * @module ConfigModule
     * @description Module for handling configuration files.
     * It is imported with global scope and loads the environment variables from '.env' file.
     */
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    /**
     * @module RmqModule
     * @description Module for configuring RabbitMQ microservice client.
     * It is imported with the provided 'APPLICATION_SERVICE' name as an option.
     */
    RmqModule.register({ name: APPLICATION_SERVICE }),
    /**
     * @module DatabaseModule
     * @description Module for configuring the database connection.
     * It is responsible for setting up the database connection using Mongoose.
     */
    DatabaseModule,
    /**
     * @module CqrsModule
     * @description Module for implementing the CQRS pattern.
     * It enables the Command Query Responsibility Segregation (CQRS) pattern in the application.
     */
    CqrsModule,
    /**
     * @module MongooseModule
     * @description Module for integrating Mongoose into the Nest application.
     * It registers Mongoose models and schemas as features for the module.
     */
    MongooseModule.forFeature([
      { name: PotentialStudent.name, schema: PotentialStudentSchema },
      { name: Teacher.name, schema: TeacherSchema },
    ]),
    /**
     * @module TeacherModule
     * @description Module for managing teacher-related functionality.
     * It encapsulates teacher-related controllers, services, and providers.
     */
    TeacherModule,
  ],
  // Configure the module controllers
  controllers: [StudentManagementController],
  // Configure the module providers
  providers: [
    StudentManagementService,
    StudentManagementRepository,
    PotentialStudentRegisteredEventHandler,
    CreatePotentialStudentCommandHandler,
  ],
})
export class StudentManagementModule {}
