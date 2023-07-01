import { IsNotEmpty, IsString } from "class-validator";
import { AbstractDocument } from "@app/common";
import { PotentialStudent } from "apps/student-management/src/schemas/potentialStudent.schema";

export class applyClassDto extends AbstractDocument {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    student: PotentialStudent;


}