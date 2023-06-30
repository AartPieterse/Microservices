import { NestFactory } from '@nestjs/core';
import { StudentManagementModule } from './student-management.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(StudentManagementModule);
  const rmqService = app.get<RmqService>(RmqService)
  app.connectMicroservice(rmqService.getOptions('STUDENT_MANAGEMENT'))
  await app.startAllMicroservices()
}
bootstrap();
