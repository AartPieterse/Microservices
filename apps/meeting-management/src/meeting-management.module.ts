import { RmqModule, AbstractService, DatabaseModule } from "@app/common";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { APPLICATION_SERVICE } from "apps/class-management/src/constants/services";
import { PotentialStudent, PotentialStudentSchema } from "apps/student-management/src/schemas/potentialStudent.schema";
import { Teacher, TeacherSchema } from "apps/student-management/src/schemas/teacher.schema";
import { Meeting, MeetingSchema } from "./schemas/meeting.schema";
import { MeetingManagementController } from "./meeting-management.controller";
import { ConfigModule } from "@nestjs/config";
import { CqrsModule } from "@nestjs/cqrs";
import { CommandHandlers } from "./commands";
import { QueryHandlers } from "./queries"; 
import { EventHandlers } from "./event";
import { EventSource, EventSourceSchema } from "./schemas/event.schema";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
    }), RmqModule.register({name: APPLICATION_SERVICE}), DatabaseModule, CqrsModule, MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema}, { name: Teacher.name, schema: TeacherSchema}, { name: PotentialStudent.name, schema: PotentialStudentSchema}, { name: EventSource.name, schema: EventSourceSchema}])],
  controllers: [MeetingManagementController],
  providers: [...CommandHandlers, ...QueryHandlers, ...EventHandlers, AbstractService<EventSource>, { provide: AbstractService, useClass: EventSource}, { provide: AbstractService, useValue: {
    model: Meeting
  }}]
})
export class MeetingManagementModule {}
