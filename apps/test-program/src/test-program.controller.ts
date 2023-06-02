import { Body, Controller, Get, Post} from '@nestjs/common';
import { TestProgramService } from './test-program.service';
import { applyTestDto } from './dto/applyTest.dto';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { CreatePotentialTestCommand } from './commands/create-potentialTest.command';

@Controller('applications')
export class TestProgramController {
  constructor(private readonly testProgramService: TestProgramService, private readonly commandBus: CommandBus, private readonly eventBus: EventBus) {}

  @Post()
  async applyForStudy(@Body() data: applyTestDto) {
    const command = new CreatePotentialTestCommand(data.name, data.study, data.phoneNumber, data.email);
    this.commandBus.execute(command);
  }

  @Get()
  async getApplications(){
    return this.testProgramService.getApplications();
  }
}
