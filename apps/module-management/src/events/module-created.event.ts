import { AggregateRoot } from "@nestjs/cqrs";

/**
 * Event class for indicating the registration of a potential study.
 */
export class ModuleCreatedEvent extends AggregateRoot {
  /**
   * Creates an instance of StudyCreatedEvent.
   * @param createStudyDto The DTO object containing the data for the registered potential study.
   */
  constructor(public readonly createModuleDto: any) {
    super();
  }
}
