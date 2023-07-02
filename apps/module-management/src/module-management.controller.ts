import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { ModuleManagementService } from './module-management.service';
import { applyModuleDto } from './dto/applyModule.dto';
import { CreatePotentialModuleCommand } from './commands/create-potentialModule.command';

/**
 * Controller for module management related HTTP endpoints.
 * Responsible for handling module creation, retrieval, and deletion.
 */
@Controller('module-management')
export class ModuleManagementController {
  constructor(
    private readonly moduleManagementService: ModuleManagementService,
    private readonly commandBus: CommandBus,
    private readonly eventBus: EventBus
  ) {}

  /**
   * Handles HTTP POST requests to create a potential module.
   * @param data The data for creating a potential module.
   */
  @Post()
  async createPotentialModuleDto(@Body() data: applyModuleDto) {
    const command = new CreatePotentialModuleCommand(data);
    this.commandBus.execute(command);
  }

  /**
   * Handles HTTP GET requests to retrieve all applications.
   * @returns A promise that resolves to the applications.
   */
  @Get()
  async getApplications() {
    return this.moduleManagementService.getApplications();
  }

  /**
   * Handles HTTP DELETE requests to delete an application by ID.
   * @param id The ID of the application to delete.
   * @returns A promise that resolves when the application is deleted.
   */
  @Delete(':id')
  async deleteApplicationById(@Param('id') id: string) {
    return this.moduleManagementService.deleteApplicationById(id);
  }
}
