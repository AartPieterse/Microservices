import { ICommand } from "@nestjs/cqrs";
import { applyClassDto } from "../dto/applyClass.dto";


export class CreatePotentialClassCommand implements ICommand{
    constructor( public readonly createPotentialClassDto: applyClassDto,
    ) {}
  }
  