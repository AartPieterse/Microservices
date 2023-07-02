import { Injectable } from '@nestjs/common';
import { Meeting } from '../schemas/meeting.schema';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository, RabbitmqService } from '@app/common';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { PotentialStudent } from '../schemas/potentialStudent.schema';
import { Teacher } from '../schemas/teacher.schema';

@Injectable()
export class MeetingService {
  constructor(
    @InjectModel(Meeting.name)
    private readonly meetingRepository: AbstractRepository<Meeting>,
    @InjectModel(PotentialStudent.name)
    private readonly studentRepository: AbstractRepository<PotentialStudent>,
    @InjectModel(Teacher.name)
    private readonly teacherRepository: AbstractRepository<Teacher>,
    private readonly rabbitmqService: RabbitmqService
  ) {
  }
  
  async create(createMeetingDto: CreateMeetingDto){
    const student = await this.studentRepository.findOne({_id: createMeetingDto.studentId});
    const teacher = await this.teacherRepository.findOne({ _id: createMeetingDto.teacherId});

    const meeting = new Meeting();
    meeting.student = student;
    meeting.teacher = teacher;
    meeting.startTime = createMeetingDto.startTime;
    meeting.endTime = createMeetingDto.endTime;

    const message = `A meeting with ${student.name} is scheduled for ${meeting.startTime}.`;
    await this.rabbitmqService.sendMessage('meeting_notifications', message);

    return await this.meetingRepository.create(meeting);
  }

  async findAll(){
    return await this.meetingRepository.find({});
  }

  async findById(id: string){
    return await this.meetingRepository.findOne({_id: id});
  }

  async update(id: string, updateMeetingDto: UpdateMeetingDto){
    return await this.meetingRepository.update(id, updateMeetingDto);
  }

  async delete(id: string){
    return await this.meetingRepository.delete(id);
  }
}
