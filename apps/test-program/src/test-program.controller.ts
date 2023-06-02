import { Body, Controller, Get, Post} from '@nestjs/common';
import { TestProgramService } from './test-program.service';
import { createPotentialTestDto } from './dto/create-potentialTest.dto';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { CreatePotentialTestCommand } from './commands/create-potentialTest.command';

@Controller('applications')
export class TestProgramController {
  constructor(private readonly testProgramService: TestProgramService, private readonly commandBus: CommandBus, private readonly eventBus: EventBus) {}

  @Post()
  async createPotentialTestDto(@Body() data: createPotentialTestDto) {
    const command = new CreatePotentialTestCommand(data.module, data.name);
    this.commandBus.execute(command);
  }

  @Get()
  async getApplications(){
    return this.testProgramService.getApplications();
  }
}
