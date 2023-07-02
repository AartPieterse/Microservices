// Import necessary modules and classes
import { AbstractDocument } from "@app/common";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

// Define the createPotentialStudentDto class extending AbstractDocument
export class createPotentialStudentDto extends AbstractDocument {
    // The name property represents the name of the potential student
    @IsString()
    @IsNotEmpty()
    name: string;

    // The email property represents the email address of the potential student
    @IsEmail()
    email: string;

    // The study property represents the field of study of the potential student
    @IsString()
    @IsNotEmpty()
    study: string;
  
    // The phoneNumber property represents the phone number of the potential student
    @IsPhoneNumber()
    phoneNumber: string;
}
