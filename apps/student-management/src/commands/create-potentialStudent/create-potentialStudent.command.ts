import { ICommand } from '@nestjs/cqrs';
import { createPotentialStudentDto } from '../../dto/create-potentialStudent.dto';

export class CreatePotentialStudentCommand implements ICommand {
  constructor(
    public readonly createPotentialStudentDto: createPotentialStudentDto,
  ) {}
}
