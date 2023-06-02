import { NestFactory } from '@nestjs/core';
import { TestProgramModule } from './class-management.module';

async function bootstrap() {
  const app = await NestFactory.create(TestProgramModule);
  await app.listen(3000);
}
bootstrap();
