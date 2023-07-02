// Import necessary modules and classes
import { Body, Controller, Post } from '@nestjs/common';
import { StudentManagementService } from './student-management.service';
import { CreatePotentialStudentCommand } from './commands/create-potentialStudent/create-potentialStudent.command';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { createPotentialStudentDto } from './dto/create-potentialStudent.dto';

/**
 * @class StudentManagementController
 * @description Controller for managing student-related operations.
 * It handles HTTP requests related to student management.
 */
@Controller('student-management')
export class StudentManagementController {
  constructor(
    private readonly studentManagementService: StudentManagementService,
    private readonly commandBus: CommandBus,
    private readonly eventBus: EventBus,
  ) {}

  /**
   * @method applyForStudy
   * @param {createPotentialStudentDto} data - Data for creating a potential student.
   * @returns {Promise<any>} - A promise that resolves to the created student.
   * @description Endpoint for applying for study.
   * It receives a POST request and creates a potential student using the provided data.
   */
  @Post()
  async applyForStudy(@Body() data: createPotentialStudentDto): Promise<any> {
    // Create a new CreatePotentialStudentCommand with the provided data
    const command = new CreatePotentialStudentCommand(data);

    // Execute the command using the command bus
    const student = this.commandBus.execute(command);

    // Return the student
    return student;
  }
}
