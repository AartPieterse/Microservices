// Import necessary modules and classes
import { ICommand } from '@nestjs/cqrs';
import { createPotentialStudentDto } from '../../dto/create-potentialStudent.dto';

// Define the CreatePotentialStudentCommand class implementing ICommand interface
export class CreatePotentialStudentCommand implements ICommand {
  // Constructor for the CreatePotentialStudentCommand class
  constructor(
    // The createPotentialStudentDto parameter represents the data required to create a potential student
    public readonly createPotentialStudentDto: createPotentialStudentDto,
  ) {}
}
