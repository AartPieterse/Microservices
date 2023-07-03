import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { StudyCreatedEvent } from './study-created.event';
import { Teacher } from '../../../student-management/src/schemas/teacher.schema';
import { RabbitmqService } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

/**
 * Event handler for the StudyCreatedEvent.
 * Implements the IEventHandler interface from the "@nestjs/cqrs" module.
 * This event handler is responsible for handling the StudyCreatedEvent and sending a notification to students.
 */
@EventsHandler(StudyCreatedEvent)
export class StudyCreatedHandler implements IEventHandler<StudyCreatedEvent> {
  /**
   * Constructor for the StudyCreatedHandler class.
   * @param teacher - The Teacher model from the "teacher" schema used to retrieve teacher information.
   * @param rabbitmqService - The RabbitmqService instance used to send messages via RabbitMQ.
   */
  constructor(
    @InjectModel(Teacher.name) private readonly teacher: Model<Teacher>,
    private readonly rabbitmqService: RabbitmqService,
  ) {}

  /**
   * Handles the StudyCreatedEvent by sending a notification to students.
   * @param event - The StudyCreatedEvent to be handled.
   * @returns A Promise representing the completion of the handling process.
   */
  async handle(event: StudyCreatedEvent): Promise<void> {
    console.log('Triggered event handler');

    // Retrieve teacher information
    const teacher = (await this.teacher.findOne({}).exec()).toObject();
    const { createStudyDto } = event;

    // Send a notification to the students using RabbitMQ
    const message = `Hello everyone, ${teacher.name} has added a new study for ${createStudyDto.module}, it's about ${createStudyDto.name}, it will have a duration of ${createStudyDto.duration} minutes, passing this study will give ${createStudyDto.ec} ECs`;
    await this.rabbitmqService.sendMessage('teacher_notifications', message);
  }
}


