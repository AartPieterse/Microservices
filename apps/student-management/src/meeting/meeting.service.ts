import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository, RabbitmqService } from '@app/common';
import { Meeting } from '../schemas/meeting.schema';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { PotentialStudent } from '../schemas/potentialStudent.schema';
import { Teacher } from '../schemas/teacher.schema';

@Injectable()
export class MeetingService {
  constructor(
    @InjectModel(Meeting.name)
    private readonly meetingRepository: AbstractRepository<Meeting>,
    private readonly studentRepository: AbstractRepository<PotentialStudent>,
    private readonly teacherRepository: AbstractRepository<Teacher>,
    private readonly rabbitmqService: RabbitmqService,
  ) {}

  /**
   * Creates a new meeting between a potential student and a teacher.
   * Sends a notification message via RabbitMQ.
   * @param createMeetingDto The DTO containing meeting details.
   * @returns The created meeting.
   */
  async create(createMeetingDto: CreateMeetingDto) {
    const student = await this.studentRepository.findOne({
      _id: createMeetingDto.studentId,
    });
    const teacher = await this.teacherRepository.findOne({
      _id: createMeetingDto.teacherId,
    });

    const meeting = new Meeting();
    meeting.student = student;
    meeting.teacher = teacher;
    meeting.startTime = createMeetingDto.startTime;
    meeting.endTime = createMeetingDto.endTime;

    const message = `A meeting with ${teacher.name} is scheduled for ${meeting.startTime}.`;
    await this.rabbitmqService.sendMessage('meeting_notifications', message);

    return await this.meetingRepository.create(meeting);
  }

  /**
   * Retrieves all meetings.
   * @returns A list of meetings.
   */
  async findAll() {
    return await this.meetingRepository.find({});
  }

  /**
   * Retrieves a meeting by its ID.
   * @param id The ID of the meeting.
   * @returns The retrieved meeting.
   */
  async findById(id: string) {
    return await this.meetingRepository.findOne({ _id: id });
  }

  /**
   * Updates a meeting by its ID.
   * Sends a notification message via RabbitMQ.
   * @param id The ID of the meeting to update.
   * @param updateMeetingDto The DTO containing updated meeting details.
   * @returns The updated meeting.
   */
  async update(id: string, updateMeetingDto: UpdateMeetingDto) {
    const match = 'Negative'; // Placeholder value, update as needed
    const message = `Your last meeting resolved into a ${match} match`;

    await this.rabbitmqService.sendMessage('student_notifications', message);

    return await this.meetingRepository.update(id, updateMeetingDto);
  }

  /**
   * Deletes a meeting by its ID.
   * @param id The ID of the meeting to delete.
   * @returns The deleted meeting.
   */
  async delete(id: string) {
    return await this.meetingRepository.delete(id);
  }
}
