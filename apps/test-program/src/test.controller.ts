import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { TestDto } from './test.dto';
import { CreateTestCommand } from './commands/create-test/create-test.command';
import { UpdateAnswersCommand } from './commands/update-answers/update-answers.command';
import { CreateTestRequest } from './dto/request/create-test-request.dto';
import { UpdateTestAnswersRequest } from './dto/request/update-test-answers-request.dto';
import { TestQuery } from './queries/test.query';

@Controller('test-program')
export class TestController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get(':id')
  async getTest(@Param('id') testId: string): Promise<void> {}

  @Get()
  async getTests(): Promise<TestDto[]> {
    return this.queryBus.execute<TestQuery, TestDto[]>(new TestQuery());
  }

  @Post()
  async createTest(
    @Body() createTestRequest: CreateTestRequest,
  ): Promise<void> {
    await this.commandBus.execute<CreateTestCommand, void>(
      new CreateTestCommand(createTestRequest),
    );
  }

  @Patch(':id/answers')
  async updateTestAnswers(
    @Param('id') testId: string,
    @Body() updateTestAnswersRequest: UpdateTestAnswersRequest,
  ): Promise<void> {
    await this.commandBus.execute<UpdateAnswersCommand, void>(
      new UpdateAnswersCommand(testId, updateTestAnswersRequest.answers),
    );
  }
}
