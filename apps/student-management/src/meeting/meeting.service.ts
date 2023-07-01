import { Injectable } from '@nestjs/common';
import { Meeting } from '../schemas/meeting.schema';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { MeetingRepository } from './meeting.repository';
import { InjectModel } from '@nestjs/mongoose';
import { RabbitmqService } from '@app/common';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { Model } from 'mongoose';

@Injectable()
export class MeetingService {
  constructor(
    @InjectModel(Meeting.name) private readonly model: Model<Meeting>,
    private readonly meetingRepository: MeetingRepository,
    private readonly rabbitmqService: RabbitmqService
  ) {
  }
  
  async create(createMeetingDto: CreateMeetingDto){
    this.meetingRepository.create(createMeetingDto);

    const message = `A meeting with ${createMeetingDto.studentId} is scheduled for ${createMeetingDto.startTime}.`;
    await this.rabbitmqService.sendMessage('meeting_notifications', message);
  }

  async findAll(){
    this.meetingRepository.find({});
  }

  async update(id: string, updateMeetingDto: UpdateMeetingDto){
    this.model.findByIdAndUpdate(id, updateMeetingDto);

    const match = updateMeetingDto.match ? 'Positive' : 'Negative';
    const message = `Your last meeting resolved into a ${match} match`;

    await this.rabbitmqService.sendMessage('student_notifications', message);
  }
}
