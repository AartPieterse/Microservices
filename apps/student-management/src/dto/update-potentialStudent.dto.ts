import { PartialType } from "@nestjs/mapped-types";
import { CreatePotentialStudentDto } from "./create-potentialStudent.dto";

export class UpdatePotentialStudentDto extends PartialType(CreatePotentialStudentDto) {}