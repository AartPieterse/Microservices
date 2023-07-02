import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    try {
      const teacher = await this.teacherService.create(
        createTeacherDto,
      );

      return {
        status: 201,
        message: 'Created Teacher',
        data: { teacher },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const teachers = await this.teacherService.findAll();

      return { status: 200, data: { teachers } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    try {
      const teacher = await this.teacherService.findById(id);

      return { status: 200, data: { teacher } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    try {
      const teacher = await this.teacherService.update(
        id,
        updateTeacherDto,
      );

      return {
        status: 200,
        message: 'Updated Teacher',
        data: { teacher },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const teacher = await this.teacherService.delete(id);

      return {
        status: 200,
        message: 'Deleted Teacher',
        data: { teacher },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
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
