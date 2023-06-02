import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class applyStudyDto {
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