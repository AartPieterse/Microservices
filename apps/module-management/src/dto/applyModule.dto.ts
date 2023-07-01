import { AbstractDocument } from "@app/common";
import { PotentialClass } from "apps/class-management/src/schemas/potentialClass.schema";
import { Teacher } from "apps/student-management/src/schemas/teacher.schema";
import { IsNotEmpty, IsString } from "class-validator";

export class applyModuleDto extends AbstractDocument {
    @IsString()
    @IsNotEmpty()
    name: string;


    teacher: Teacher;

    class: PotentialClass

}