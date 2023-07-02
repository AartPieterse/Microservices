import { NestFactory } from '@nestjs/core';
import { MeetingManagementModule } from './meeting-management.module';

async function bootstrap() {
  const app = await NestFactory.create(MeetingManagementModule);
  await app.listen(3000);
}
bootstrap();
