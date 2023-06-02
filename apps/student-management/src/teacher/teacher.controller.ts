import { Body, Controller, Get, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { RmqContext } from '@nestjs/microservices/ctx-host/rmq.context';
import { Ctx, MessagePattern, Payload } from '@nestjs/microservices';

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
  public async execute(@Payload() data: any) {
    console.log('Message: ', data);
  }
}
