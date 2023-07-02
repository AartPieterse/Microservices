import { EventsHandler, IQueryHandler } from '@nestjs/cqrs';
import { AbstractService } from '@app/common';
import { GetScheduledMeetingQuery } from './schedule-meeting.query';
import { Meeting } from '../schemas/meeting.schema';

@EventsHandler(GetScheduledMeetingQuery)
export class GetScheduledMeetingQueryHandler implements IQueryHandler<GetScheduledMeetingQuery> {
  constructor(private readonly meetingService: AbstractService<Meeting>) {}
  execute(query: GetScheduledMeetingQuery): Promise<any> {
    const { id } = query;

    return this.meetingService.findOne({_id: id});
  }
}