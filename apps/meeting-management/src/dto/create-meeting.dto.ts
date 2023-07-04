import { AbstractDocument } from "@app/common";
import { IsDate, IsMongoId, IsNotEmpty, IsString } from "class-validator";

/**
 * DTO for creating a meeting.
 * Extends the AbstractDocument class.
 */
export class CreateMeetingDto extends AbstractDocument {
  /**
   * ID of the student associated with the meeting.
   */
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  studentId: string;

  /**
   * ID of the teacher associated with the meeting.
   */
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  teacherId: string;

  /**
   * Start time of the meeting.
   */
  @IsDate()
  startTime: Date;

  /**
   * End time of the meeting.
   */
  @IsDate()
  endTime: Date;
}
