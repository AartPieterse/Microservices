import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PotentialStudentService } from './potentialStudent.service';
import { CreatePotentialStudentDto } from './dto/create-potentialStudent.dto';
import { UpdatePotentialStudentDto } from './dto/update-potentialStudent.dto';

@Controller('potentialStudents')
export class PotentialStudentController {
  constructor(
    private readonly potentialStudentService: PotentialStudentService,
  ) {}

  @Post()
  async create(@Body() createPotentialStudentDto: CreatePotentialStudentDto) {
    try {
      const potentialStudent = await this.potentialStudentService.create(
        createPotentialStudentDto,
      );

      return {
        status: 201,
        message: 'Created Potential Student',
        data: { potentialStudent },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const students = await this.potentialStudentService.findAll();

      return { status: 200, data: { students } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    try {
      const student = await this.potentialStudentService.findById(id);

      return { status: 200, data: { student } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePotentialStudentDto: UpdatePotentialStudentDto,
  ) {
    try {
      const potentialStudent = await this.potentialStudentService.update(
        id,
        updatePotentialStudentDto,
      );

      return {
        status: 200,
        message: 'Updated Potential Student',
        data: { potentialStudent },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const potentialStudent = await this.potentialStudentService.delete(id);

      return {
        status: 200,
        message: 'Deleted Potential Student',
        data: { potentialStudent },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }
}
