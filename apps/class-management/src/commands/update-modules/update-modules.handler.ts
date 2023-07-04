import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ClassEntityRepository } from '../../db/class-entity.repository';
import { UpdateModulesCommand } from './update-modules.command';


@CommandHandler(UpdateModulesCommand)
export class UpdateModulesHandler implements ICommandHandler<UpdateModulesCommand> {
  constructor(
    private readonly classEntityRepository: ClassEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ classId, modules }: UpdateModulesCommand): Promise<void> {
    const classInstance = this.eventPublisher.mergeObjectContext(
      await this.classEntityRepository.findOneById(classId),
    );
    classInstance.updateModules(modules);
    await this.classEntityRepository.findOneAndReplaceById(classId, classInstance);
    classInstance.commit();
  }
}
