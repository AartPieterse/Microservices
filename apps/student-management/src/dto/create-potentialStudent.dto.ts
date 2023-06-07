import { AbstractDocument } from "@app/common";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class createPotentialStudentDto extends AbstractDocument {
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

}