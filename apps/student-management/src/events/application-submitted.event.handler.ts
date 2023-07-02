import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { RabbitmqService } from "@app/common";
import { ApplicationSubmittedEvent } from "./application-submitted.event";
import { TeacherService } from "../teacher/teacher.service";

@EventsHandler(ApplicationSubmittedEvent)
export class ApplicationSubmittedEventHanlder implements IEventHandler<ApplicationSubmittedEvent> {
    constructor(private readonly rabbitmqService: RabbitmqService, private readonly teacherService: TeacherService) {}

    async handle(event: ApplicationSubmittedEvent) {
        const { potentialStudent } = event;

        const teacher = await this.teacherService.findByStudy(potentialStudent.study);
    
        // Send a notification to the teacher using RabbitMQ
        const message = `Hello ${teacher.name}, ${potentialStudent.name} has applied for the study ${potentialStudent.study}. Please schedule a meeting. \nContact: ${potentialStudent.email}, ${potentialStudent.phoneNumber}`
        await this.rabbitmqService.sendMessage('teacher_notifications', message);
    }
}