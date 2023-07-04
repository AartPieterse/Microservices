import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AbstractService } from '@app/common';
import { GetScheduledMeetingQuery } from './schedule-meeting.query';
import { Meeting } from '../schemas/meeting.schema';
import { InjectModel } from '@nestjs/mongoose';

@QueryHandler(GetScheduledMeetingQuery)
export class GetScheduledMeetingQueryHandler implements IQueryHandler<GetScheduledMeetingQuery> {
  constructor(@InjectModel(Meeting.name) private readonly meetingService: AbstractService<Meeting>) {}
  execute(query: GetScheduledMeetingQuery): Promise<any> {
    const { id } = query;

    return this.meetingService.findOne({_id: id});
  }
}