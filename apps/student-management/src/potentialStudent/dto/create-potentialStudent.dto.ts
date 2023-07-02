// Import necessary modules and classes
import { AbstractDocument } from "@app/common";
import { IsDate, IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreatePotentialStudentDto extends AbstractDocument {
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
<<<<<<< HEAD:apps/student-management/src/dto/create-potentialStudent.dto.ts
}
=======

    @IsDate()
    birthday: Date
}
>>>>>>> 0b198514b91adeb28a63726cc2834dceeda7dcf0:apps/student-management/src/potentialStudent/dto/create-potentialStudent.dto.ts
