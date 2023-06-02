import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PotentialStudentRegisteredEvent } from './potentialStudent-registered.event';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RabbitmqService } from '@app/common';
import { Teacher } from '../schemas/teacher.schema';

@EventsHandler(PotentialStudentRegisteredEvent)
export class PotentialStudentRegisteredEventHandler implements IEventHandler<PotentialStudentRegisteredEvent> {
  constructor(@InjectModel(Teacher.name) private readonly teacher : Model<Teacher>,  private readonly rabbitmqService: RabbitmqService) {}

  async handle(event: PotentialStudentRegisteredEvent): Promise<void> {
    console.log("Triggered eventhandler")

    const teacher =  (await this.teacher.findOne({}).exec()).toObject();
    const { createPotentialStudentDto } = event;

    // Send a notification to the teacher using RabbitMQ
    const message = `Hello ${teacher.name}, ${createPotentialStudentDto.name} has applied for the study ${createPotentialStudentDto.study}. Contact: ${createPotentialStudentDto.email}, ${createPotentialStudentDto.phoneNumber}`

    await this.rabbitmqService.sendMessage('teacher_notifications', message);
  }
}