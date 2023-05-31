import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { GuidanceModule } from './guidance.module';

async function bootstrap() {
  const app = await NestFactory.create(GuidanceModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}

bootstrap();
