import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class applyTestDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    module: string;

    @IsString()
    @IsNotEmpty()
    study: string;
  
    @IsPhoneNumber()
    phoneNumber: string;

}