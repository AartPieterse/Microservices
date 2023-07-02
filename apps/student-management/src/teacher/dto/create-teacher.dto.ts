// Import necessary modules and classes
import { AbstractDocument } from "@app/common";
import { IsNotEmpty, IsString } from "class-validator";

// Define the CreateTeacherDto class extending AbstractDocument
export class CreateTeacherDto extends AbstractDocument {
  // The name property represents the name of the teacher
  @IsString()
  @IsNotEmpty()
  name: string;
}
