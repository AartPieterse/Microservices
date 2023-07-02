/**
 * Represents the DTO (Data Transfer Object) for applying to a class.
 * Extends the AbstractDocument class.
 */
import { IsNotEmpty, IsString } from "class-validator";
import { AbstractDocument } from "@app/common";
import { PotentialStudent } from "apps/student-management/src/schemas/potentialStudent.schema";

export class CreatePotentialClassDto extends AbstractDocument {
    /**
     * The name of the class to apply for.
     */
    @IsString()
    @IsNotEmpty()
    name: string;

    /**
     * The potential student applying for the class.
     */
    student: PotentialStudent;
}
