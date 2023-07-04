import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { TestFactory } from '../../../src/test.factory';
import { CreateTestCommand } from './create-test.command';

@CommandHandler(CreateTestCommand)
export class CreateTestHandler
  implements ICommandHandler<CreateTestCommand> {
  constructor(
    private readonly testFactory: TestFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ createTestRequest }: CreateTestCommand): Promise<void> {
    const { name, module, duration, ec, questions, answers } = createTestRequest;
    const test = this.eventPublisher.mergeObjectContext(
      await this.testFactory.create(name, module, duration, ec, questions, answers),
    );
    test.commit();
  }
}