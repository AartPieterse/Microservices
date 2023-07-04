import { AggregateRoot, IEvent } from '@nestjs/cqrs';

export class ApplicationSubmittedEvent extends AggregateRoot implements IEvent{
  constructor(public readonly applicationSubmitted: any) {super()}
}