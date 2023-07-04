import { IQuery } from "@nestjs/cqrs";
export class GetPotentialStudentQuery implements IQuery {
    constructor(public readonly getpotentialStudent: string) {}
  }