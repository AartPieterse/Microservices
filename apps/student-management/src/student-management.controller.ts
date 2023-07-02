import { Body, Controller, Post} from '@nestjs/common';
import { CreatePotentialStudentCommand } from './commands/create-potentialStudent/create-potentialStudent.command';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { CreatePotentialStudentDto } from './potentialStudent/dto/create-potentialStudent.dto';

/**
 * @class StudentManagementController
 * @description Controller for managing student-related operations.
 * It handles HTTP requests related to student management.
 */
@Controller('student-management')
export class StudentManagementController {
  constructor(private readonly commandBus: CommandBus, private readonly eventBus: EventBus) {}

  /**
   * @method applyForStudy
   * @param {createPotentialStudentDto} data - Data for creating a potential student.
   * @returns {Promise<any>} - A promise that resolves to the created student.
   * @description Endpoint for applying for study.
   * It receives a POST request and creates a potential student using the provided data.
   */
  @Post()
  async applyForStudy(@Body() data: CreatePotentialStudentDto) {
    const command = new CreatePotentialStudentCommand(data);

    // Execute the command using the command bus
    const student = this.commandBus.execute(command);

    // Return the student
    return student;
  }

  // @MessagePattern('meeting_notifications')
  // public async getMeetingResults(@Payload() data: any) {
  //   console.log('Message: ', data);
  // }
}
