import { AggregateRoot } from "@nestjs/cqrs";

export class TestCreatedEvent extends AggregateRoot {
  constructor(public readonly createTestDto: any) {
    super();
  }
}
