import { IsEmail, IsDate, IsString } from 'class-validator';

export class MeetingDto {
  @IsDate()
  Date: Date;

  @IsEmail()
  TeacherEmail: string;

  @IsEmail()
  StudentEmail: string;

  @IsString()
  Notes: string;
}
