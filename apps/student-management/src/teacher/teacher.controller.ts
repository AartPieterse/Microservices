// Import necessary modules and classes
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

/**
 * @description Controller class for handling teacher-related HTTP requests and message patterns.
 * It defines endpoints for creating teachers, finding all teachers, and handling teacher notifications.
 */
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  /**
   * @description Handler for the POST /teachers endpoint.
   * It creates a new teacher using the provided data.
   * @param createTeacherDto The DTO object containing teacher data.
   * @returns A response object with status and message.
   */
  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    // Call the teacherService to create a teacher
    await this.teacherService.create(createTeacherDto);

    // Return a response object with status and message
    return { status: 201, message: 'Created Teacher' };
  }

  /**
   * @description Handler for the GET /teachers endpoint.
   * It retrieves all teachers from the teacherService.
   * @returns An array of teacher objects.
   */
  @Get()
  findAll() {
    // Call the teacherService to find all teachers
    return this.teacherService.findAll();
  }

  /**
   * @description Message handler for 'teacher_notifications' pattern.
   * It logs the received message.
   * @param data The payload data of the received message.
   */
  @MessagePattern('teacher_notifications')
  public async GetNotifications(@Payload() data: any) {
    console.log('Message: ', data);
  }

  @MessagePattern('meeting_notifications')
  public async getMeetings(@Payload() data: any) {
    console.log('Message: ', data);
  }
}
