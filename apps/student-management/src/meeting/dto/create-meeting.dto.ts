import { AbstractDocument } from "@app/common";
import { IsDate, IsMongoId, IsNotEmpty, IsString } from "class-validator";

export class CreateMeetingDto extends AbstractDocument{
    @IsMongoId()
    @IsString()
    @IsNotEmpty()
    studentId: string;
  
    @IsMongoId()
    @IsString()
    @IsNotEmpty()
    teacherId: string;
  
    @IsDate()
    startTime: Date;
  
    @IsDate()
    endTime: Date;

    match: boolean
}
