/**
 * Represents a command to create a potential class.
 */
import { ICommand } from '@nestjs/cqrs';
import { CreatePotentialClassDto } from '../dto/CreatePotentialClassDto';

export class CreatePotentialClassCommand implements ICommand {
  /**
   * Constructs an instance of CreatePotentialClassCommand.
   * @param createPotentialClassDto The DTO (Data Transfer Object) containing the data for creating the potential class.
   */
  constructor(public readonly createPotentialClassDto: CreatePotentialClassDto) {}
}
