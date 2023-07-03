import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { StudyDto } from './study.dto';
import { CreateStudyCommand } from './commands/create-study/create-study.command';
import { UpdateClassesCommand } from './commands/update-classes/update-classes.command';
import { CreateStudyRequest } from './dto/request/create-study-request.dto';
import { UpdateStudyClassesRequest } from './dto/request/update-study-classes-request.dto';
import { StudyQuery } from './queries/study.query';

@Controller('study-program')
export class StudyController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get(':id')
  async getStudy(@Param('id') studyId: string): Promise<void> {}

  @Get()
  async getStudies(): Promise<StudyDto[]> {
    return this.queryBus.execute<StudyQuery, StudyDto[]>(new StudyQuery());
  }

  @Post()
  async createStudy(
    @Body() createStudyRequest: CreateStudyRequest,
  ): Promise<void> {
    await this.commandBus.execute<CreateStudyCommand, void>(
      new CreateStudyCommand(createStudyRequest),
    );
  }

  @Patch(':id/classes')
  async updateStudyClasses(
    @Param('id') studyId: string,
    @Body() updateStudyClassesRequest: UpdateStudyClassesRequest,
  ): Promise<void> {
    await this.commandBus.execute<UpdateClassesCommand, void>(
      new UpdateClassesCommand(studyId, updateStudyClassesRequest.classes),
    );
  }
}
