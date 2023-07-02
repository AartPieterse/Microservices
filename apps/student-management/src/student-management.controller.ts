import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePotentialStudentDto } from './dto/create-potentialStudent.dto';
import { AbstractService } from '@app/common';
import { PotentialStudent } from './schemas/potentialStudent.schema';
import { UpdatePotentialStudentDto } from './dto/update-potentialStudent.dto';
import { GetPotentialStudentQuery } from './queries/potentialStudent.query';
import { CreatePotentialStudentCommand } from './commands/create-potentialStudent.command';

/**
 * @class StudentManagementController
 * @description Controller for managing student-related operations.
 * It handles HTTP requests related to student management.
 */
@Controller('student-management')
export class StudentManagementController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly potentialStudentService: AbstractService<PotentialStudent>,
  ) {
  }

  /**
   * @method applyForStudy
   * @param {createPotentialStudentDto} data - Data for creating a potential student.
   * @returns {Promise<any>} - A promise that resolves to the created student.
   * @description Endpoint for applying for study.
   * It receives a POST request and creates a potential student using the provided data.
   */
  @Post()
  async applyForStudy(@Body() data: CreatePotentialStudentDto) {
    try {
      const command = new CreatePotentialStudentCommand(data);

      // Execute the command using the command bus
      const potentialStudent = this.commandBus.execute(command);

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
      const students = await this.potentialStudentService.find({});

      return { status: 200, data: { students } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const query = new GetPotentialStudentQuery(id);

      const student = this.queryBus.execute(query);

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
