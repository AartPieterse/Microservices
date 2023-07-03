import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ClassDto } from './class.dto';
import { CreateClassCommand } from './commands/create-class/create-class.command';
import { UpdateModulesCommand } from './commands/update-modules/update-modules.command';
import { CreateClassRequest } from './dto/request/create-class-request.dto';
import { UpdateClassModulesRequest } from './dto/request/update-class-modules-request.dto';
import { ClassQuery } from './queries/class.query';

@Controller('class-management')
export class ClassController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get(':id')
  async getClass(@Param('id') classId: string): Promise<void> {}

  @Get()
  async getClasses(): Promise<ClassDto[]> {
    return this.queryBus.execute<ClassQuery, ClassDto[]>(new ClassQuery());
  }

  @Post()
  async createClass(
    @Body() createClassRequest: CreateClassRequest,
  ): Promise<void> {
    await this.commandBus.execute<CreateClassCommand, void>(
      new CreateClassCommand(createClassRequest),
    );
  }

  @Patch(':id/modules')
  async updateClassClasses(
    @Param('id') classId: string,
    @Body() updateClassModulesRequest: UpdateClassModulesRequest,
  ): Promise<void> {
    await this.commandBus.execute<UpdateModulesCommand, void>(
      new UpdateModulesCommand(classId, updateClassModulesRequest.modules),
    );
  }
}
