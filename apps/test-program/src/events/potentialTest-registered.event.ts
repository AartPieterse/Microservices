import { AggregateRoot } from "@nestjs/cqrs";

/**
 * Event class for indicating the registration of a potential test.
 */
export class PotentialTestRegisteredEvent extends AggregateRoot {
  /**
   * Creates an instance of PotentialTestRegisteredEvent.
   * @param createPotentialTestDto The DTO object containing the data for the registered potential test.
   */
  constructor(public readonly createPotentialTestDto: any) {
    super();
  }
}
