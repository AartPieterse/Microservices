import { AggregateRoot } from "@nestjs/cqrs";

export class PotentialClassRegisteredEvent extends AggregateRoot {
  constructor( public readonly createPotentialClassDto: any) {
    super();
  }
}
