import { AggregateRoot, IEvent } from '@nestjs/cqrs';
import { Meeting } from 'apps/meeting-management/src/schemas/meeting.schema';

export class ScheduleMeetingEvent extends AggregateRoot implements IEvent {
  constructor(public readonly meeting: Meeting) {super()}
}