import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    await this.teacherService.create(createTeacherDto);

    return { status: 201, message: "Created Teacher"}
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @MessagePattern('teacher_notifications')
  public async GetNotifications(@Payload() data: any) {
    console.log('Message: ', data);
  }

  @MessagePattern('meeting_notifications')
  public async getMeetings(@Payload() data: any) {
    console.log('Message: ', data);
  }
}
