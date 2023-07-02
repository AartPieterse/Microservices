import { IEvent } from '@nestjs/cqrs';
import { PotentialStudent } from '../schemas/potentialStudent.schema';

export class ApplicationSubmittedEvent implements IEvent {
  constructor(public readonly potentialStudent: PotentialStudent) {}
}