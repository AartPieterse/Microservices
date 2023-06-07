import { AggregateRoot, IEvent } from '@nestjs/cqrs';

export class PotentialStudentRegisteredEvent  extends AggregateRoot implements IEvent {
  constructor(public readonly createPotentialStudentDto: any) {
    super();
  }
}
