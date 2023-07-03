import { AggregateRoot } from "@nestjs/cqrs";

/**
 * Event class for indicating the registration of a potential study.
 */
export class ClassCreatedEvent extends AggregateRoot {
  /**
   * Creates an instance of StudyCreatedEvent.
   * @param createClassDto The DTO object containing the data for the registered potential study.
   */
  constructor(public readonly createClassDto: any) {
    super();
  }
}
