import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TestCreatedEvent } from './test-created.event';
import { Teacher } from '../../../student-management/src/schemas/teacher.schema';
import { RabbitmqService } from '../../../../libs/common/src/rabbitmq/rabbitmq.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@EventsHandler(TestCreatedEvent)
export class TestCreatedHandler implements IEventHandler<TestCreatedEvent> {
  constructor(
    @InjectModel(Teacher.name) private readonly teacher: Model<Teacher>,
    private readonly rabbitmqService: RabbitmqService,
  ) {}

  async handle(event: TestCreatedEvent): Promise<void> {
    console.log('Triggered event handler');

    const { createTestDto } = event;

    // Retrieve teacher information
    const teacher = await this.teacher.findOne().exec();

    if (teacher) {
      const { name } = teacher;

      // Send a notification to the students using RabbitMQ
      const message = `Hello everyone, ${name} has added a new test for ${createTestDto.module}.`;
      await this.rabbitmqService.sendMessage('teacher_notifications', message);
    }
  }
}
