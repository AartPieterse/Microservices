// Import necessary modules and classes
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PotentialStudentRegisteredEvent } from './potentialStudent-registered.event';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RabbitmqService } from '@app/common';
import { Teacher } from '../schemas/teacher.schema';

/**
 * @description Event handler for the PotentialStudentRegisteredEvent.
 * Implements the IEventHandler interface for the event.
 */
@EventsHandler(PotentialStudentRegisteredEvent)
export class PotentialStudentRegisteredEventHandler implements IEventHandler<PotentialStudentRegisteredEvent> {
  constructor(
    @InjectModel(Teacher.name) private readonly teacher: Model<Teacher>,
    private readonly rabbitmqService: RabbitmqService
  ) {}

  /**
   * @description Handle method that processes the PotentialStudentRegisteredEvent.
   * @param event The PotentialStudentRegisteredEvent object.
   */
  async handle(event: PotentialStudentRegisteredEvent): Promise<void> {
    // Log a message to indicate that the event handler has been triggered
    console.log("Triggered event handler")

    // Find a teacher and convert it to an object
    const teacher = (await this.teacher.findOne({}).exec()).toObject();

    // Extract the createPotentialStudentDto from the event
    const { createPotentialStudentDto } = event;

    // Create a notification message for the teacher
    const message = `Hello ${teacher.name}, ${createPotentialStudentDto.name} has applied for the study ${createPotentialStudentDto.study}. Contact: ${createPotentialStudentDto.email}, ${createPotentialStudentDto.phoneNumber}`;

    // Send the notification message to the teacher using RabbitMQ
    await this.rabbitmqService.sendMessage('teacher_notifications', message);
  }
}
