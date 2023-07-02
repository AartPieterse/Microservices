import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingController } from './meeting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { APPLICATION_SERVICE } from '../constants/services';
import { AbstractRepository, RmqModule } from '@app/common';
import { Meeting, MeetingSchema } from '../schemas/meeting.schema';
import { PotentialStudent, PotentialStudentSchema } from '../schemas/potentialStudent.schema';
import { Teacher, TeacherSchema } from '../schemas/teacher.schema';

@Module({
  imports: [RmqModule.register({name: APPLICATION_SERVICE}), MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema}, { name: Teacher.name, schema: TeacherSchema}, { name: PotentialStudent.name, schema: PotentialStudentSchema}])],
  controllers: [MeetingController],
  providers: [MeetingService, { provide: AbstractRepository, useValue: {
    model: PotentialStudent
  }}]
})
export class MeetingModule {}
