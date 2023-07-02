import { Test, TestingModule } from '@nestjs/testing';
import { MeetingManagementController } from './meeting-management.controller';
import { MeetingManagementService } from './meeting-management.service';

describe('MeetingManagementController', () => {
  let meetingManagementController: MeetingManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MeetingManagementController],
      providers: [MeetingManagementService],
    }).compile();

    meetingManagementController = app.get<MeetingManagementController>(MeetingManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(meetingManagementController.getHello()).toBe('Hello World!');
    });
  });
});
