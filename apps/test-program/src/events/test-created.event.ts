import { AggregateRoot } from "@nestjs/cqrs";

/**
 * Event class for indicating the registration of a potential test.
 */
export class TestCreatedEvent extends AggregateRoot {
  /**
   * Creates an instance of TestCreatedEvent.
   * @param createPotentialTestDto The DTO object containing the data for the registered potential test.
   */
  constructor(public readonly createTestDto: any) {
    super();
  }
}