import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { ScheduleMeetingCommand } from './schedule-meeting.command';
import { AbstractService } from '@app/common';
import { Meeting } from '../schemas/meeting.schema';
import { Teacher } from 'apps/student-management/src/schemas/teacher.schema';
import { PotentialStudent } from 'apps/student-management/src/schemas/potentialStudent.schema';
import { ScheduleMeetingEvent } from '../event/schedule-meeting.event';
import { InjectModel } from '@nestjs/mongoose';
import { EventSource } from '../schemas/event.schema';

@CommandHandler(ScheduleMeetingCommand)
export class ScheduleMeetingCommandHandler
  implements ICommandHandler<ScheduleMeetingCommand>
{
  constructor(
    private readonly publisher: EventPublisher,
    @InjectModel(Meeting.name)
    private readonly meetingService: AbstractService<Meeting>,
    @InjectModel(Teacher.name)
    private readonly teacherService: AbstractService<Teacher>,
    @InjectModel(PotentialStudent.name)
    private readonly potentialStudentService: AbstractService<PotentialStudent>,
    @InjectModel(EventSource.name)
    private readonly eventService: AbstractService<EventSource>,
  ) {}

  async execute(command: ScheduleMeetingCommand): Promise<void> {
    const { createMeetingDto } = command;

    const student = await this.potentialStudentService.findOne({
      _id: createMeetingDto.studentId,
    });
    const teacher = await this.teacherService.findOne({
      _id: createMeetingDto.teacherId,
    });

    // Schedule meeting logic here
    const meeting = new Meeting();
    meeting.student = student;
    meeting.teacher = teacher;
    meeting.startTime = createMeetingDto.startTime;
    meeting.endTime = createMeetingDto.endTime;

    const createdMeeting = await this.meetingService.create(meeting);
    const scheduledMeeting = new ScheduleMeetingEvent(createdMeeting);

    // Event Sourcing
    const eventSource = new EventSource();
    eventSource.body = "ScheduleMeetingEvent";

    if (await this.eventService.create(eventSource)) {
      // Publish event
      const event = this.publisher.mergeObjectContext(scheduledMeeting);
      event.publish(event);
    } else {
      console.error('Failed to create event');
    }
  }
}
