import { AbstractDocument } from "@app/common";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTeacherDto extends AbstractDocument{
    @IsString()
    @IsNotEmpty()
    name: string;
}
