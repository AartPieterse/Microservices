import { IQuery } from "@nestjs/cqrs";
import { PotentialStudent } from "../schemas/potentialStudent.schema";
export class GetPotentialStudentQuery implements IQuery {
    constructor(public readonly potentialStudent: PotentialStudent) {}
  }