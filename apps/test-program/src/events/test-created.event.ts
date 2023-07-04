import { AggregateRoot, IEvent } from "@nestjs/cqrs";

export class TestCreatedEvent extends AggregateRoot implements IEvent {
  constructor(public readonly createTestDto: any) {
    super();
  }
}
