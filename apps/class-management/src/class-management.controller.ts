import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { ClassManagementService } from './class-management.service';
import { applyClassDto } from './dto/applyClass.dto';
import { CreatePotentialClassCommand } from './commands/create-potentialClass.command';


@Controller('class-management')
export class ClassManagementController {
  constructor(private readonly classManagementService: ClassManagementService, private readonly commandBus: CommandBus, private readonly eventBus: EventBus) {}

  @Post()
  async createPotentialClassDto(@Body() data: applyClassDto) {
    const command = new CreatePotentialClassCommand(data);
    this.commandBus.execute(command);
  }

  @Get()
  async getApplications(){
    return this.classManagementService.getApplications();
  }

  @Delete(':id')
  async deleteApplicationById(@Param('id') id: string) {
    return this.classManagementService.deleteApplicationById(id);
  }
}
