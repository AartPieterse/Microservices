import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PotentialTestRegisteredEvent } from './potentialTest-registered.event';
import { Teacher } from '../schemas/teacher.schema';
import { RabbitmqService } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

/**
 * Event handler for the PotentialTestRegisteredEvent.
 * Implements the IEventHandler interface from the "@nestjs/cqrs" module.
 * This event handler is responsible for handling the PotentialTestRegisteredEvent and sending a notification to students.
 */
@EventsHandler(PotentialTestRegisteredEvent)
export class PotentialTestRegisteredEventHandler implements IEventHandler<PotentialTestRegisteredEvent> {
  /**
   * Constructor for the PotentialTestRegisteredEventHandler class.
   * @param teacher - The Teacher model from the "teacher" schema used to retrieve teacher information.
   * @param rabbitmqService - The RabbitmqService instance used to send messages via RabbitMQ.
   */
  constructor(
    @InjectModel(Teacher.name) private readonly teacher : Model<Teacher>,
    private readonly rabbitmqService: RabbitmqService
  ) {}

  /**
   * Handles the PotentialTestRegisteredEvent by sending a notification to students.
   * @param event - The PotentialTestRegisteredEvent to be handled.
   * @returns A Promise representing the completion of the handling process.
   */
  async handle(event: PotentialTestRegisteredEvent): Promise<void> {
    console.log("Triggered event handler")
    
    // Retrieve teacher information
    const teacher = (await this.teacher.findOne({}).exec()).toObject();
    const { createPotentialTestDto } = event;

    // Send a notification to the students using RabbitMQ
    const message = `Hello everyone, ${teacher.name} has added a new test for ${createPotentialTestDto.module}, it's about ${createPotentialTestDto.name}, it will have a duration of ${createPotentialTestDto.duration} minutes, passing this test will give ${createPotentialTestDto.ec} ECs`;
    await this.rabbitmqService.sendMessage('teacher_notifications', message);
  }
}
