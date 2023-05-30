import { NestFactory } from '@nestjs/core';
import { GuidanceProgramModule } from './guidance-program.module';

async function bootstrap() {
  const app = await NestFactory.create(GuidanceProgramModule);
  await app.listen(3000);
}
bootstrap();
