import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PotentialClassRegisteredEvent } from './potentialClass-registered.event';
import { AbstractRepository, RabbitmqService } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialClass } from '../schemas/potentialClass.schema';
import { Model } from 'mongoose';

@EventsHandler(PotentialClassRegisteredEvent)
export class PotentialClassRegisteredEventHandler implements IEventHandler<PotentialClassRegisteredEvent> {
  constructor(@InjectModel(PotentialClass.name) private readonly potentialClass : Model<PotentialClass>,  private readonly rabbitmqService: RabbitmqService) {}

  async handle(event: PotentialClassRegisteredEvent): Promise<void> {
    // Send a notification to the teacher using RabbitMQ
    const message = `A new class named: ${PotentialClass.name} has been made`

    await this.rabbitmqService.sendMessage('study-notification', message);
  }
}