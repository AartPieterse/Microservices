import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { StudyEntityRepository } from '../../db/study-entity.repository';
import { UpdateClassesCommand } from './update-classes.command';

@CommandHandler(UpdateClassesCommand)
export class UpdateClassesHandler implements ICommandHandler<UpdateClassesCommand> {
  constructor(
    private readonly studyEntityRepository: StudyEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ studyId, classes }: UpdateClassesCommand): Promise<void> {
    const study = this.eventPublisher.mergeObjectContext(
      await this.studyEntityRepository.findOneById(studyId),
    );
    study.updateClasses(classes);
    await this.studyEntityRepository.findOneAndReplaceById(studyId, study);
    study.commit();
  }
}
