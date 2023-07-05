import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ModuleDto } from './module.dto';
import { CreateModuleCommand } from './commands/create-module/create-module.command';
import { UpdateClassesCommand } from './commands/update-classes/update-classes.command';
import { CreateModuleRequest } from './dto/request/create-module-request.dto';
import { UpdateModuleClassesRequest } from './dto/request/update-module-classes-request.dto';
import { ModuleQuery } from './queries/module.query';
import { Payload, RmqContext, Ctx, EventPattern } from '@nestjs/microservices';
import { ModuleDtoRepository } from './db/module-dto.repository';

@Controller('module-management')
export class ModuleController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly moduleDtoRepository: ModuleDtoRepository
  ) {}

  @Get(':id')
  async getModule(@Param('id') moduleId: string) {
    return this.moduleDtoRepository.findAll();
  }

  @Get()
  async getModules(): Promise<ModuleDto[]> {
    return this.queryBus.execute<ModuleQuery, ModuleDto[]>(new ModuleQuery());
  }

  @Post()
  async createModule(
    @Body() createModuleRequest: CreateModuleRequest,
  ): Promise<void> {
    await this.commandBus.execute<CreateModuleCommand, void>(
      new CreateModuleCommand(createModuleRequest),
    );
  }

  @Patch(':id/classes')
  async updateModuleClasses(
    @Param('id') moduleId: string,
    @Body() updateModuleClassesRequest: UpdateModuleClassesRequest,
  ): Promise<void> {
    await this.commandBus.execute<UpdateClassesCommand, void>(
      new UpdateClassesCommand(moduleId, updateModuleClassesRequest.classes),
    );
  }

  @EventPattern('test-notification')
  public async GetNotifications(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('Message: ', data )
  }
}

