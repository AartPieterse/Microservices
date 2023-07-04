import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ModuleFactory } from '../../module.factory';
import { CreateModuleCommand } from './create-module.command';

@CommandHandler(CreateModuleCommand)
export class CreateModuleHandler implements ICommandHandler<CreateModuleCommand> {
  constructor(
    private readonly moduleFactory: ModuleFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ createModuleRequest }: CreateModuleCommand): Promise<void> {
    const { name, teacher, classes } = createModuleRequest;
    const module = this.eventPublisher.mergeObjectContext(
      await this.moduleFactory.create(name, teacher, classes),
    );
    module.commit();
  }
}
