import { ICommand } from "@nestjs/cqrs";
import { createPotentialTestDto } from "../dto/create-potentialTest.dto";

export class CreatePotentialTestCommand implements ICommand{
    constructor( public readonly createPotentialTestDto: createPotentialTestDto,


    ) {}
  }
  