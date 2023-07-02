import { Module } from '@nestjs/common';
import { MeetingManagementController } from './meeting-management.controller';
import { MeetingManagementService } from './meeting-management.service';

@Module({
  imports: [],
  controllers: [MeetingManagementController],
  providers: [MeetingManagementService],
})
export class MeetingManagementModule {}
