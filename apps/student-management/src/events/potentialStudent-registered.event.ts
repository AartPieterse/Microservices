// Import necessary modules and classes
import { AggregateRoot, IEvent } from '@nestjs/cqrs';

// Define the PotentialStudentRegisteredEvent class extending AggregateRoot and implementing IEvent
export class PotentialStudentRegisteredEvent extends AggregateRoot implements IEvent {
  // Constructor for the PotentialStudentRegisteredEvent class
  constructor(public readonly createPotentialStudentDto: any) {
    super();
  }
}
