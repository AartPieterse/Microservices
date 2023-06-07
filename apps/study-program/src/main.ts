import { NestFactory } from '@nestjs/core';
import { StudyProgramModule } from './study-program.module';

async function bootstrap() {
  const app = await NestFactory.create(StudyProgramModule);
  await app.listen(3000);
}
bootstrap();
