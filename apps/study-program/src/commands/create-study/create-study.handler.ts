import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { StudyFactory } from '../../study.factory';
import { CreateStudyCommand } from './create-study.command';

@CommandHandler(CreateStudyCommand)
export class CreateStudyHandler implements ICommandHandler<CreateStudyCommand> {
  constructor(
    private readonly studyFactory: StudyFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ createStudyRequest }: CreateStudyCommand): Promise<void> {
    const { name, classes } = createStudyRequest;
    const study = this.eventPublisher.mergeObjectContext(
      await this.studyFactory.create(name, classes),
    );
    study.commit();
  }
}
