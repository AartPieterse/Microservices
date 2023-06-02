import { AggregateRoot } from "@nestjs/cqrs";

export class PotentialTestRegisteredEvent extends AggregateRoot {
  constructor(
    public readonly testId: string,
    public readonly name: string,
    public readonly duration: number,
    public readonly ec: number,
    public readonly questions: string[],
    public readonly answers: string[],

  ) {
    super();
  }
}
