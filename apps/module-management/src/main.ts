import { NestFactory } from '@nestjs/core';
import { ModuleManagementModule } from './module-management.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ModuleManagementModule);
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}

bootstrap();