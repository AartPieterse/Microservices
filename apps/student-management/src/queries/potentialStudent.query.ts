import { IQuery } from "@nestjs/cqrs";
export class GetPotentialStudentQuery implements IQuery {
    constructor(public readonly id: string) {}
  }