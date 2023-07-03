import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ModuleEntityRepository } from '../../db/module-entity.repository';
import { UpdateClassesCommand } from './update-classes.command';

@CommandHandler(UpdateClassesCommand)
export class UpdateClassesHandler implements ICommandHandler<UpdateClassesCommand> {
  constructor(
    private readonly moduleEntityRepository: ModuleEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ moduleId, classes }: UpdateClassesCommand): Promise<void> {
    const module = this.eventPublisher.mergeObjectContext(
      await this.moduleEntityRepository.findOneById(moduleId),
    );
    module.updateClasses(classes);
    await this.moduleEntityRepository.findOneAndReplaceById(moduleId, module);
    module.commit();
  }
}
