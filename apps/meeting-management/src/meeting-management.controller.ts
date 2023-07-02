import { Controller, Get } from '@nestjs/common';
import { MeetingManagementService } from './meeting-management.service';

@Controller()
export class MeetingManagementController {
  constructor(private readonly meetingManagementService: MeetingManagementService) {}

  @Get()
  getHello(): string {
    return this.meetingManagementService.getHello();
  }
}
