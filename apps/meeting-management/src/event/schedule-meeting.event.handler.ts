import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { ScheduleMeetingEvent } from "./schedule-meeting.event";
import { RabbitmqService } from "@app/common";

@EventsHandler(ScheduleMeetingEvent)
export class ScheduleMeetingEventHandler implements IEventHandler<ScheduleMeetingEvent> {
    constructor(private readonly rabbitmqService: RabbitmqService) {}

    async handle(event: ScheduleMeetingEvent) {
        const { meeting } = event;

        const message = `Meeting scheduled with ${meeting.teacher.name} at ${meeting.startTime.toLocaleString()}`;
        await this.rabbitmqService.sendMessage('potentialStudent_notifications', message);
    }
}