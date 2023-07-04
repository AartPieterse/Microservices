// Import necessary modules and classes
import { AbstractDocument } from "@app/common";
import { IsNotEmpty, IsString } from "class-validator";
/**
 * Data Transfer Object (DTO) class for creating a teacher.
 * Extends the AbstractDocument class from the "@app/common" module.
 * This class represents the data required to create a teacher.
 */
export class CreateTeacherDto extends AbstractDocument{
    /**
   * The name property represents the name of the teacher.
   * It must be a non-empty string.
   */
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    study: string;
}
