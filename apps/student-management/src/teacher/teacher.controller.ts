import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { AbstractService } from '@app/common';
import { Teacher } from '../schemas/teacher.schema';

/**
 * @description Controller class for handling teacher-related HTTP requests and message patterns.
 * It defines endpoints for creating teachers, finding all teachers, and handling teacher notifications.
 */
@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: AbstractService<Teacher>) {}

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
      const teachers = await this.teacherService.find({});

      return { status: 200, data: { teachers } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    try {
      const teacher = await this.teacherService.findOne({_id: id});

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
} 
