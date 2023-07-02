import { PartialType } from "@nestjs/mapped-types";
import { CreatePotentialStudentDto } from "./create-potentialStudent.dto";

/**
 * DTO for updating potential student entities.
 * Extends the `PartialType` class from `@nestjs/mapped-types`.
 */
export class UpdatePotentialStudentDto extends PartialType(CreatePotentialStudentDto) {}
