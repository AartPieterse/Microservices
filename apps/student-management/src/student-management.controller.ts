// Import necessary modules and classes
import { Body, Controller, Post } from '@nestjs/common';
import { StudentManagementService } from './student-management.service';
import { CreatePotentialStudentCommand } from './commands/create-potentialStudent/create-potentialStudent.command';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { createPotentialStudentDto } from './dto/create-potentialStudent.dto';

// Define the StudentManagementController class
@Controller('student-management')
export class StudentManagementController {
  constructor(
    private readonly studentManagementService: StudentManagementService,
    private readonly commandBus: CommandBus,
    private readonly eventBus: EventBus,
  ) {}

  // Endpoint to apply for study
  @Post()
  async applyForStudy(@Body() data: createPotentialStudentDto) {
    // Create a new CreatePotentialStudentCommand with the provided data
    const command = new CreatePotentialStudentCommand(data);

    // Execute the command using the command bus
    const student = this.commandBus.execute(command);

    // Return the student
    return student;
  }
}
