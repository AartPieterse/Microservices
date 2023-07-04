import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ModuleCreatedEvent } from './module-created.event';
import { Teacher } from '../../../student-management/src/schemas/teacher.schema';
import { RabbitmqService } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

/**
 * Event handler for the ModuleCreatedEvent.
 * Implements the IEventHandler interface from the "@nestjs/cqrs" module.
 * This event handler is responsible for handling the ModuleCreatedEvent and sending a notification to students.
 */
@EventsHandler(ModuleCreatedEvent)
export class ModuleCreatedHandler implements IEventHandler<ModuleCreatedEvent> {
  /**
   * Constructor for the ModuleCreatedHandler class.
   * @param teacher - The Teacher model from the "teacher" schema used to retrieve teacher information.
   * @param rabbitmqService - The RabbitmqService instance used to send messages via RabbitMQ.
   */
  constructor(
    @InjectModel(Teacher.name) private readonly teacher: Model<Teacher>,
    private readonly rabbitmqService: RabbitmqService,
  ) {}

  /**
   * Handles the ModuleCreatedEvent by sending a notification to students.
   * @param event - The ModuleCreatedEvent to be handled.
   * @returns A Promise representing the completion of the handling process.
   */
  async handle(event: ModuleCreatedEvent): Promise<void> {
    console.log('Triggered event handler');

    // Retrieve teacher information
    const teacher = (await this.teacher.findOne({}).exec()).toObject();
    const { createModuleDto } = event;

    // Send a notification to the students using RabbitMQ
    const message = `Hello everyone, ${teacher.name} has added a new module for ${createModuleDto.module}, it's about ${createModuleDto.name}, it will have a duration of ${createModuleDto.duration} minutes, passing this module will give ${createModuleDto.ec} ECs`;
    await this.rabbitmqService.sendMessage('teacher_notifications', message);
  }
}
