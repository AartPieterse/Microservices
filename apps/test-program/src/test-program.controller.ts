import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TestProgramService } from './test-program.service';
import { createPotentialTestDto } from './dto/create-potentialTest.dto';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { CreatePotentialTestCommand } from './commands/create-potentialTest.command';

/**
 * Controller class for managing potential tests in the test-program module.
 */
@Controller('test-program')
export class TestProgramController {
  constructor(
    private readonly testProgramService: TestProgramService,
    private readonly commandBus: CommandBus,
    private readonly eventBus: EventBus,
  ) {}

  /**
   * Endpoint for deleting a potential test by its ID.
   * @param id The ID of the potential test to be deleted.
   * @returns A Promise that resolves to the deleted potential test.
   */
  @Delete(':id')
  async deleteApplicationById(@Param('id') id: string) {
    return this.testProgramService.deleteApplicationById(id);
  }

  /**
   * Endpoint for creating a new potential test.
   * @param data The data for creating the potential test.
   * @returns A Promise that resolves to the created potential test.
   */
  @Post()
  async createPotentialTestDto(@Body() data: createPotentialTestDto) {
    const command = new CreatePotentialTestCommand(data);
    this.commandBus.execute(command);
  }

  /**
   * Endpoint for retrieving all potential tests.
   * @returns A Promise that resolves to an array of potential tests.
   */
  @Get()
  async getApplications() {
    return this.testProgramService.getApplications();
  }
}
