import { CommandHandler, ICommandHandler, EventPublisher } from '@nestjs/cqrs';
import { ScheduleMeetingCommand } from './schedule-meeting.command';
import { AbstractService} from '@app/common';
import { Meeting } from '../schemas/meeting.schema';
import { Teacher } from 'apps/student-management/src/schemas/teacher.schema';
import { PotentialStudent } from 'apps/student-management/src/schemas/potentialStudent.schema';
import { ScheduleMeetingEvent } from '../event/schedule-meeting.event';


@CommandHandler(ScheduleMeetingCommand)
export class ScheduleMeetingCommandHandler implements ICommandHandler<ScheduleMeetingCommand> {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly meetingService: AbstractService<Meeting>,
    private readonly teacherService: AbstractService<Teacher>,
    private readonly potentialStudentService: AbstractService<PotentialStudent>,
  ) {}

  async execute(command: ScheduleMeetingCommand): Promise<void> {
    const { createMeetingDto } = command;

    const student = await this.potentialStudentService.findOne({_id: createMeetingDto.studentId});
    const teacher = await this.teacherService.findOne({_id: createMeetingDto.teacherId});

    // Schedule meeting logic here
    const meeting = new Meeting();
    meeting.student = student;
    meeting.teacher = teacher;
    meeting.startTime = createMeetingDto.startTime;
    meeting.endTime = createMeetingDto.endTime;

    const createdMeeting = await this.meetingService.create(meeting);
    const scheduledMeeting = new ScheduleMeetingEvent(createdMeeting);

    const event = this.publisher.mergeObjectContext(scheduledMeeting.meeting);
    event.publish(event);
  }
}