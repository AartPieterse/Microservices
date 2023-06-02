import { AggregateRoot } from "@nestjs/cqrs";

export class PotentialTestRegisteredEvent extends AggregateRoot {
  constructor( public readonly createPotentialTestDto: any


  ) {
    super();
  }
}
