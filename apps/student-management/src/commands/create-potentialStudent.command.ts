// Import necessary modules and classes
import { ICommand } from '@nestjs/cqrs';
import { CreatePotentialStudentDto } from '../dto/create-potentialStudent.dto';

/**
 * Command class for creating a potential student.
 * Implements the ICommand interface from the @nestjs/cqrs module.
 */
export class CreatePotentialStudentCommand implements ICommand {
  /**
   * Constructor for the CreatePotentialStudentCommand class.
   * @param createPotentialStudentDto - The data required to create a potential student.
   */
  constructor(
    public readonly createPotentialStudentDto : CreatePotentialStudentDto
  ) {}
}
