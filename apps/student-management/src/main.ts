import { NestFactory } from '@nestjs/core';
import { StudentManagementModule } from './student-management.module';

async function bootstrap() {
  const app = await NestFactory.create(StudentManagementModule);
  await app.listen(3000);
}
bootstrap();
