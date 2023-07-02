import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingController } from './meeting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { APPLICATION_SERVICE } from '../constants/services';
import { AbstractRepository, RmqModule } from '@app/common';
import { Meeting, MeetingSchema } from '../schemas/meeting.schema';
import { PotentialStudent, PotentialStudentSchema } from '../schemas/potentialStudent.schema';
import { Teacher, TeacherSchema } from '../schemas/teacher.schema';

/**
 * The MeetingModule is responsible for managing meetings between potential students and teachers.
 * It provides the necessary controllers, services, and modules to handle meeting operations.
 */
@Module({
  imports: [
    // Register the RmqModule with the specified service name
    RmqModule.register({ name: APPLICATION_SERVICE }),

    // Register the MongooseModule to work with the Meeting, Teacher, and PotentialStudent schemas
    MongooseModule.forFeature([
      { name: Meeting.name, schema: MeetingSchema },
      { name: Teacher.name, schema: TeacherSchema },
      { name: PotentialStudent.name, schema: PotentialStudentSchema },
    ]),
  ],
  controllers: [MeetingController],
  providers: [
    // Provide the MeetingService to handle meeting-related operations
    MeetingService,

    // Provide the AbstractRepository with the PotentialStudent model
    { provide: AbstractRepository, useValue: { model: PotentialStudent } },
  ],
})
export class MeetingModule {}
