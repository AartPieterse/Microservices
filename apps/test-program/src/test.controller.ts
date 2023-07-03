import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus, QueryBus, EventBus } from '@nestjs/cqrs';
import { TestDto } from './test.dto';
import { CreateTestCommand } from './commands/create-test/create-test.command';
import { UpdateAnswersCommand } from './commands/update-answers/update-answers.command';
import { CreateTestRequest } from './dto/request/create-test-request.dto';
import { UpdateTestAnswersRequest } from './dto/request/update-test-answers-request.dto';
import { TestQuery } from './queries/test.query';
import { TestCreatedEvent } from './events/test-created.event';
import { RabbitmqService } from '@app/common';
import { MessagePattern, Ctx, RmqContext } from '@nestjs/microservices';


@Controller('test-program')
export class TestController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly eventBus: EventBus,
    private readonly rabbitmqService: RabbitmqService,
  ) {}

  @Get(':id')
  async getTest(@Param('id') testId: string): Promise<void> {}

  @Get()
  async getTests(): Promise<TestDto[]> {
    return this.queryBus.execute<TestQuery, TestDto[]>(new TestQuery());
  }

  @MessagePattern('createTest')
  @Post()
  async createTest(
    @Body() createTestRequest: CreateTestRequest,
  ): Promise<void> {
    await this.commandBus.execute<CreateTestCommand, void>(
      new CreateTestCommand(createTestRequest),
    );

    // Publish test created event
    const testCreatedEvent = new TestCreatedEvent(createTestRequest);
    await this.eventBus.publish(testCreatedEvent);

    const message = `A new test has been created: ${createTestRequest.name}`;
    await this.rabbitmqService.sendMessage('teacher_notifications', message);
    console.log('Sent message to RabbitMQ:', message);
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
