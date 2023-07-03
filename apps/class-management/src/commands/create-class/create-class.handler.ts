import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ClassFactory } from '../../class.factory';
import { CreateClassCommand } from './create-class.command';

@CommandHandler(CreateClassCommand)
export class CreateClassHandler
  implements ICommandHandler<CreateClassCommand>
{
  constructor(
    private readonly classFactory: ClassFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ createClassRequest }: CreateClassCommand): Promise<void> {
    const { name, students, modules } = createClassRequest;
    const classes = this.eventPublisher.mergeObjectContext(
      await this.classFactory.create(name, students, modules),
    );
    classes.commit();
  }
}
