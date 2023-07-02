import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

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

  /**
   * @description Handler for the GET /teachers endpoint.
   * It retrieves all teachers from the teacherService.
   * @returns An array of teacher objects.
   */
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
