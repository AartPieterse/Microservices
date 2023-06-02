import { NestFactory } from '@nestjs/core';
import { TestProgramModule } from './test-program.module';

async function bootstrap() {
  const app = await NestFactory.create(TestProgramModule);
  await app.listen(3000);
}
bootstrap();
