// Import necessary modules and classes
import { AggregateRoot, IEvent } from '@nestjs/cqrs';

/**
 * Event class for representing the registration of a potential student.
 * Extends the AggregateRoot class from the "@nestjs/cqrs" module and implements the IEvent interface.
 * This class represents an event that is emitted when a potential student is registered.
 */
export class PotentialStudentRegisteredEvent extends AggregateRoot implements IEvent {
  /**
   * Constructor for the PotentialStudentRegisteredEvent class.
   * @param createPotentialStudentDto - The data representing the potential student being registered.
   */
  constructor(public readonly createPotentialStudentDto: any) {
    super();
  }
}
