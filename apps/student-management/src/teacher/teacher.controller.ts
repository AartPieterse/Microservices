// Import necessary modules and classes
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { RmqContext } from '@nestjs/microservices/ctx-host/rmq.context';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';

// Define the TeacherController class
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  // Handler for the POST /teachers endpoint
  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    // Call the teacherService to create a teacher
    await this.teacherService.create(createTeacherDto);

    // Return a response object with status and message
    return { status: 201, message: "Created Teacher" };
  }

  // Handler for the GET /teachers endpoint
  @Get()
  findAll() {
    // Call the teacherService to find all teachers
    return this.teacherService.findAll();
  }

  // Message handler for 'teacher_notifications' pattern
  @MessagePattern('teacher_notifications')
  public async execute(@Payload() data: any) {
    // Log the received message
    console.log('Message: ', data);
  }
}
