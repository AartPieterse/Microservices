import { ICommand } from '@nestjs/cqrs';
import { CreatePotentialModuleDto } from '../dto/CreatePotentialModuleDto';

/**
 * Command for creating a potential module.
 */
export class CreatePotentialModuleCommand implements ICommand {
  /**
   * Initializes a new instance of the CreatePotentialModuleCommand class.
   * @param createPotentialModuleDto The DTO (Data Transfer Object) for creating a potential module.
   */
  constructor(public readonly createPotentialModuleDto: CreatePotentialModuleDto) {}
}
