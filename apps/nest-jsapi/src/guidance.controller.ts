import { Body, Controller, Get, Post } from '@nestjs/common';
import { GuidanceService } from './guidance.service';
import { MeetingDto } from './dto/meetingDto';

@Controller('applications')
export class GuidanceController {
  constructor(private readonly guidanceService: GuidanceService) {}

  @Post()
  async addMeeting() {
    const application = await this.guidanceService.addMeeting2();

    return {
      status: 200,
      message: 'Confirmation message sent',
      data: application,
    };
  }

  @Get()
  async getMeetings() {
    //return this.guidanceService.getMeetings();
    return 1112;
  }
}
