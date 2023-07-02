import { RmqModule, AbstractService, DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { APPLICATION_SERVICE } from "apps/class-management/src/constants/services";
import { PotentialStudent, PotentialStudentSchema } from "apps/student-management/src/schemas/potentialStudent.schema";
import { Teacher, TeacherSchema } from "apps/student-management/src/schemas/teacher.schema";
import { Meeting, MeetingSchema } from "./schemas/meeting.schema";
import { MeetingManagementController } from "./meeting-management.controller";
import { ScheduleMeetingCommandHandler } from "./commands/schedule-meeting.command.handler";
import { GetScheduledMeetingQueryHandler } from "./queries/schedule-meeting.query.handler";
import { ScheduleMeetingEventHandler } from "./event/schedule-meeting.event.handler";
import { ConfigModule } from "@nestjs/config";
import { CqrsModule } from "@nestjs/cqrs";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }), RmqModule.register({name: APPLICATION_SERVICE}), DatabaseModule, CqrsModule, MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema}, { name: Teacher.name, schema: TeacherSchema}, { name: PotentialStudent.name, schema: PotentialStudentSchema}])],
  controllers: [MeetingManagementController],
  providers: [ScheduleMeetingCommandHandler, GetScheduledMeetingQueryHandler, ScheduleMeetingEventHandler, { provide: AbstractService, useValue: {
    model: Meeting
  }}]
})
export class MeetingManagementModule {}
