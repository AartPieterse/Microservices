import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { ModuleManagementService } from './module-management.service';
import { applyModuleDto } from './dto/applyModule.dto';
import { CreatePotentialModuleCommand } from './commands/create-potentialModule.command';


@Controller('module-management')
export class ModuleManagementController {
  constructor(private readonly moduleManagementService: ModuleManagementService, private readonly commandBus: CommandBus, private readonly eventBus: EventBus) {}

  @Post()
  async createPotentialModuleDto(@Body() data: applyModuleDto) {
    const command = new CreatePotentialModuleCommand(data);
    this.commandBus.execute(command);
  }

  @Get()
  async getApplications(){
    return this.moduleManagementService.getApplications();
  }

  @Delete(':id')
  async deleteApplicationById(@Param('id') id: string) {
    return this.moduleManagementService.deleteApplicationById(id);
  }
}
