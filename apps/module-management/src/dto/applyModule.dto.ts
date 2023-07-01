import { AbstractDocument } from "@app/common";
import { PotentialClass } from "apps/class-management/src/schemas/potentialClass.schema";
import { Teacher } from "apps/student-management/src/schemas/teacher.schema";
import { IsNotEmpty, IsString } from "class-validator";

/**
 * DTO (Data Transfer Object) for applying a module.
 * Extends the AbstractDocument class.
 */
export class applyModuleDto extends AbstractDocument {
    /**
     * Name of the module.
     */
    @IsString()
    @IsNotEmpty()
    name: string;

    /**
     * Teacher associated with the module.
     */
    teacher: Teacher;

    /**
     * Class associated with the module.
     */
    class: PotentialClass;
}
