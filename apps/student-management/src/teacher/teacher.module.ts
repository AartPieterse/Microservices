// Import necessary modules and classes
import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from '../schemas/teacher.schema';
import { AbstractService, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from '../constants/services';

/**
 * @module TeacherModule
 * @description Module for managing teachers.
 * It imports the required modules and specifies the controllers and providers for the teacher feature.
 */
@Module({
  // Import required modules
  imports: [
    /**
     * @description Register the RmqModule with the given name.
     * It allows communication with RabbitMQ microservice.
     */
    RmqModule.register({ name: APPLICATION_SERVICE }),

    /**
     * @description Register the MongooseModule with the Teacher schema.
     * It provides the Mongoose connection and access to the Teacher collection.
     */
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }])
  ],
  // Specify the controllers
  controllers: [TeacherController],
  providers: [TeacherService, AbstractService<Teacher>, { provide: AbstractService, useClass: Teacher}]
})
export class TeacherModule {}
