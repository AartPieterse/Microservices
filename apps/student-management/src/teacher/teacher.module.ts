// Import necessary modules and classes
import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { TeacherRepository } from './teacher.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from '../schemas/teacher.schema';
import { RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from '../constants/services';

// Define the TeacherModule class
@Module({
  // Import required modules
  imports: [
    // Register RmqModule with the given name
    RmqModule.register({ name: APPLICATION_SERVICE }),
    // Register MongooseModule with the Teacher schema
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }])
  ],
  // Specify the controllers
  controllers: [TeacherController],
  // Specify the providers
  providers: [TeacherService, TeacherRepository]
})
export class TeacherModule {}
