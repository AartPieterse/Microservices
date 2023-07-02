// Import necessary modules and classes
import { AbstractDocument } from "@app/common";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

/**
 * Data Transfer Object (DTO) class for creating a potential student.
 * Extends the AbstractDocument class from the "@app/common" module.
 * This class represents the data required to create a potential student.
 */
export class createPotentialStudentDto extends AbstractDocument {
    /**
     * The name property represents the name of the potential student.
     * It must be a non-empty string.
     */
    @IsString()
    @IsNotEmpty()
    name: string;

    /**
     * The email property represents the email address of the potential student.
     * It must be a valid email address.
     */
    @IsEmail()
    email: string;

    /**
     * The study property represents the field of study of the potential student.
     * It must be a non-empty string.
     */
    @IsString()
    @IsNotEmpty()
    study: string;
  
    /**
     * The phoneNumber property represents the phone number of the potential student.
     * It must be a valid phone number.
     */
    @IsPhoneNumber()
    phoneNumber: string;
}
