import { ICommand } from '@nestjs/cqrs';
import { CreatePotentialStudentDto } from '../../potentialStudent/dto/create-potentialStudent.dto';

export class CreatePotentialStudentCommand implements ICommand {
  constructor(
    public readonly createPotentialStudentDto: CreatePotentialStudentDto,
  ) {}
}
