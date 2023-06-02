import { AggregateRoot } from "@nestjs/cqrs";

export class PotentialStudentRegisteredEvent extends AggregateRoot {
  constructor(
    public readonly studentId: string,
    public readonly name: string,
    public readonly study: string,
    public readonly phoneNumber: string,
    public readonly email: string,
  ) {
    super();
  }
}
