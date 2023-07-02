import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';

@Controller('meetings')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Post()
  create(@Body() createMeetingDto: CreateMeetingDto) {
    this.meetingService.create(createMeetingDto);
    return {status: 201, message: `Your meeting with teacher ${createMeetingDto.teacherId} is scheduled for ${createMeetingDto.startTime}.`}
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeetingDto: UpdateMeetingDto){
    this.meetingService.update(id, updateMeetingDto);
    return {status: 200, message: `Your meeting is updated`};
  }
}
