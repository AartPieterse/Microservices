import { ICommand } from "@nestjs/cqrs";
import { applyModuleDto } from "../dto/applyModule.dto";


export class CreatePotentialModuleCommand implements ICommand{
    constructor( public readonly createPotentialModuleDto: applyModuleDto,
    ) {}
  }
  