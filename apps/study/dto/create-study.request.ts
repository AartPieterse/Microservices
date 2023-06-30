import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateStudyRequest {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    class:string;

    @IsString()
    teacher:string;

    @IsString()
    student:string;

}