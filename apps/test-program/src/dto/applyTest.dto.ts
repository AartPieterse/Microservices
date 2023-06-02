import { IsArray, IsNotEmpty, IsString, IsNumber } from "class-validator";

export class applyTestDto {
    @IsString()
    @IsNotEmpty()
    module: string;

    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsNumber()
    @IsNotEmpty()
    duration: number;

    @IsNumber()
    @IsNotEmpty()
    ec: number;
  
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    questions: string[];
  
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty({ each: true })
    answers: string[];

}