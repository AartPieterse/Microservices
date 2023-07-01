import { AggregateRoot } from "@nestjs/cqrs";

export class PotentialModuleRegisteredEvent extends AggregateRoot {
  constructor( public readonly createPotentialModuleDto: any) {
    super();
  }
}