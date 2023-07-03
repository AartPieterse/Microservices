import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ClassCreatedEvent } from './class-created.event';
import { Teacher } from '../../../student-management/src/schemas/teacher.schema';
import { RabbitmqService } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

/**
 * Event handler for the ModuleCreatedEvent.
 * Implements the IEventHandler interface from the "@nestjs/cqrs" module.
 * This event handler is responsible for handling the ModuleCreatedEvent and sending a notification to students.
 */
@EventsHandler(ClassCreatedEvent)
export class ClassCreatedHandler implements IEventHandler<ClassCreatedEvent> {
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
  async handle(event: ClassCreatedEvent): Promise<void> {
    console.log('Triggered event handler');

    // Retrieve teacher information
    const teacher = (await this.teacher.findOne({}).exec()).toObject();
    const { createClassDto } = event;

    // Send a notification to the students using RabbitMQ
    const message = `Hello everyone, ${teacher.name} has added a new module for ${createClassDto.module}, it's about ${createClassDto.name}, it will have a duration of ${createClassDto.duration} minutes, passing this module will give ${createClassDto.ec} ECs`;
    await this.rabbitmqService.sendMessage('teacher_notifications', message);
  }
}
