import { AggregateRoot } from "@nestjs/cqrs";

/**
 * Event representing the registration of a potential module.
 * Extends the AggregateRoot class.
 */
export class PotentialModuleRegisteredEvent extends AggregateRoot {
  /**
   * Initializes a new instance of the PotentialModuleRegisteredEvent class.
   * @param createPotentialModuleDto The DTO (Data Transfer Object) for creating the potential module.
   */
  constructor(public readonly createPotentialModuleDto: any) {
    super();
  }
}
