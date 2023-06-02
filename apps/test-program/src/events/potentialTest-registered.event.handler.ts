import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PotentialTestRegisteredEvent } from './potentialTest-registered.event';
import { Teacher } from '../schemas/teacher.schema';
import { AbstractRepository, RabbitmqService } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialTest } from '../schemas/potentialTest.schema';
import { Model } from 'mongoose';

@EventsHandler(PotentialTestRegisteredEvent)
export class PotentialTestRegisteredEventHandler implements IEventHandler<PotentialTestRegisteredEvent> {
  constructor(@InjectModel(PotentialTest.name) private readonly potentialTest : Model<PotentialTest>,  private readonly rabbitmqService: RabbitmqService) {}

  async handle(event: PotentialTestRegisteredEvent): Promise<void> {
    const teacher =  (await this.potentialTest.findOne({}).exec()).toObject();

    // Send a notification to the teacher using RabbitMQ
    const message = `Hello everyone, ${teacher.name} has added a new test for ${event.name}, it will have a duration of ${event.duration} minutes, passing this test will give ${event.ec} ECs`
    await this.rabbitmqService.sendMessage('teacher_notifications', message);
  }
}