import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PotentialModuleRegisteredEvent } from './potentialModule-registered.event';
import { AbstractRepository, RabbitmqService } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PotentialModule } from '../schemas/potentialModule.schema';

/**
 * Event handler for the PotentialModuleRegisteredEvent.
 */
@EventsHandler(PotentialModuleRegisteredEvent)
export class PotentialModuleRegisteredEventHandler implements IEventHandler<PotentialModuleRegisteredEvent> {
  constructor(
    @InjectModel(PotentialModule.name) private readonly potentialModule: Model<PotentialModule>,
    private readonly rabbitmqService: RabbitmqService
  ) {}

  /**
   * Handles the PotentialModuleRegisteredEvent.
   * @param event The PotentialModuleRegisteredEvent instance.
   * @returns A promise that resolves when the event handling is complete.
   */
  async handle(event: PotentialModuleRegisteredEvent): Promise<void> {
    const message = `A new module named: ${PotentialModule.name} has been made`;
    await this.rabbitmqService.sendMessage('study-notification', message);
  }
}
