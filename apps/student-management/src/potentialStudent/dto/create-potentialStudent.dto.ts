import { AbstractDocument } from "@app/common";
import { IsDate, IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreatePotentialStudentDto extends AbstractDocument {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    study: string;
  
    @IsPhoneNumber()
    phoneNumber: string;

    @IsDate()
    birthday: Date
}