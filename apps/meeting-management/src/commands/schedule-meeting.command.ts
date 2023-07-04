import { ICommand } from '@nestjs/cqrs';
import { CreateMeetingDto } from '../dto/create-meeting.dto';

export class ScheduleMeetingCommand implements ICommand {
  constructor(public readonly createMeetingDto: CreateMeetingDto) {}
}
