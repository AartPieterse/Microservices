import { PartialType } from "@nestjs/mapped-types";
import { CreateMeetingDto } from "./create-meeting.dto";

/**
 * DTO for updating a meeting.
 * Extends the CreateMeetingDto and allows partial updates.
 */
export class UpdateMeetingDto extends PartialType(CreateMeetingDto) {}
