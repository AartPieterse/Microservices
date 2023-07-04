import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { TestEntityRepository } from '../../../src/db/test-entity.repository';
import { UpdateAnswersCommand } from './update-answers.command';

@CommandHandler(UpdateAnswersCommand)
export class UpdateAnswersHandler
  implements ICommandHandler<UpdateAnswersCommand>
{
  constructor(
    private readonly testEntityRepository: TestEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ testId, answers }: UpdateAnswersCommand): Promise<void> {
    const test = this.eventPublisher.mergeObjectContext(
      await this.testEntityRepository.findOneById(testId),
    );
    test.updateAnswers(answers);
    await this.testEntityRepository.findOneAndReplaceById(testId, test);
    test.commit();
  }
}
