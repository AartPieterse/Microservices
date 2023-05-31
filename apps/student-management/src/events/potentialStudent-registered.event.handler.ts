import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PotentialStudentRegisteredEvent } from './potentialStudent-registered.event';
import { Teacher } from '../schemas/teacher.schema';
import { AbstractRepository, RabbitmqService } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { PotentialStudent } from '../schemas/potentialStudent.schema';
import { Model } from 'mongoose';

@EventsHandler(PotentialStudentRegisteredEvent)
export class PotentialStudentRegisteredEventHandler implements IEventHandler<PotentialStudentRegisteredEvent> {
  constructor(@InjectModel(PotentialStudent.name) private readonly potentialStudent : Model<PotentialStudent>,  private readonly rabbitmqService: RabbitmqService) {}

  async handle(event: PotentialStudentRegisteredEvent): Promise<void> {
    const teacher =  (await this.potentialStudent.findOne({}).exec()).toObject();

    // Send a notification to the teacher using RabbitMQ
    const message = `Hello ${teacherObject.name}, ${event.name} has applied for the study ${event.study}. Contact: ${event.email}, ${event.phoneNumber}`

    await this.rabbitmqService.sendMessage('teacher_notifications', message);
  }
}