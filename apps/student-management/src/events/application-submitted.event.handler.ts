import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { RabbitmqService } from "@app/common";
import { ApplicationSubmittedEvent } from "./application-submitted.event";
import { TeacherService } from "../teacher/teacher.service";

@EventsHandler(ApplicationSubmittedEvent)
export class ApplicationSubmittedEventHandler implements IEventHandler<ApplicationSubmittedEvent> {
    constructor(private readonly rabbitmqService: RabbitmqService, private readonly teacherService: TeacherService) {}

    async handle(event: ApplicationSubmittedEvent) {
        const { applicationSubmitted } = event;

        const teacher = await this.teacherService.findByStudy(applicationSubmitted.study);
        // Send a notification to the teacher using RabbitMQ
        const message = `Hello ${teacher.name}, ${applicationSubmitted.name} has applied for the study ${applicationSubmitted.study}. Please schedule a meeting. \nContact: ${applicationSubmitted.email}, ${applicationSubmitted.phoneNumber}`
        await this.rabbitmqService.sendMessage('teacher_notifications', message);
    }
}