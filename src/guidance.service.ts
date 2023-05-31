import { Injectable } from '@nestjs/common';
import { GuidanceRepository } from './guidance.repository';
import { Meeting } from './schemas/meeting.schema';
import { InjectModel } from '@nestjs/mongoose';
import { MeetingDto } from './dto/meetingDto';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Injectable()
export class GuidanceService {
  constructor(
    @InjectModel(Meeting.name)
    private readonly guidanceRepo: GuidanceRepository,
    private readonly rabbitmqService: RabbitmqService,
  ) {}

  async addMeeting(data: MeetingDto) {
    const newMeeting = await this.guidanceRepo.create(null);

    const message = JSON.stringify({
      teacherEmail: data.TeacherEmail,
      studentEmail: data.StudentEmail,
      date: data.Date,
    });

    this.rabbitmqService.sendMessage('student_notifications', message);

    return newMeeting;
  }

  async getMeetings() {
    return this.guidanceRepo.find({});
  }
}
