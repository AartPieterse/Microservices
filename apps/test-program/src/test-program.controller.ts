import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { TestProgramService } from './test-program.service';
import { createPotentialTestDto } from './dto/create-potentialTest.dto';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { CreatePotentialTestCommand } from './commands/create-potentialTest.command';

@Controller('test-program')
export class TestProgramController {
  constructor(private readonly testProgramService: TestProgramService, private readonly commandBus: CommandBus, private readonly eventBus: EventBus) {}

  @Delete(':id')
  async deleteApplicationById(@Param('id') id: string) {
    return this.testProgramService.deleteApplicationById(id);
  }

  @Post()
  async createPotentialTestDto(@Body() data: createPotentialTestDto) {
    const command = new CreatePotentialTestCommand(data);
    this.commandBus.execute(command);
  }

  @Get()
  async getApplications(){
    return this.testProgramService.getApplications();
  }

}
