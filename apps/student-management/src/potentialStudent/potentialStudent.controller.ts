import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PotentialStudentService } from './potentialStudent.service';
import { CreatePotentialStudentDto } from './dto/create-potentialStudent.dto';
import { UpdatePotentialStudentDto } from './dto/update-potentialStudent.dto';

/**
 * Controller class for handling potential student-related HTTP requests.
 */
@Controller('potentialStudents')
export class PotentialStudentController {
  constructor(private readonly potentialStudentService: PotentialStudentService) {}

  /**
   * Endpoint for creating a potential student.
   * @param createPotentialStudentDto The DTO containing the data for creating a potential student.
   * @returns The created potential student or an error message.
   */
  @Post()
  async create(@Body() createPotentialStudentDto: CreatePotentialStudentDto) {
    try {
      const potentialStudent = await this.potentialStudentService.create(createPotentialStudentDto);

      return {
        status: 201,
        message: 'Created Potential Student',
        data: { potentialStudent },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  /**
   * Endpoint for retrieving all potential students.
   * @returns An array of potential students or an error message.
   */
  @Get()
  async findAll() {
    try {
      const students = await this.potentialStudentService.findAll();

      return { status: 200, data: { students } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  /**
   * Endpoint for retrieving a potential student by ID.
   * @param id The ID of the potential student.
   * @returns The potential student with the specified ID or an error message.
   */
  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const student = await this.potentialStudentService.findById(id);

      return { status: 200, data: { student } };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  /**
   * Endpoint for updating a potential student.
   * @param id The ID of the potential student to update.
   * @param updatePotentialStudentDto The DTO containing the updated data for the potential student.
   * @returns The updated potential student or an error message.
   */
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePotentialStudentDto: UpdatePotentialStudentDto,
  ) {
    try {
      const potentialStudent = await this.potentialStudentService.update(id, updatePotentialStudentDto);

      return {
        status: 200,
        message: 'Updated Potential Student',
        data: { potentialStudent },
      };
    } catch (err) {
      return { status: 400, message: err.message };
    }
  }

  /**
   * Endpoint for deleting a potential student.
   * @param id The ID of the potential student to delete.
   * @returns The deleted potential student or an error message.
   */
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
