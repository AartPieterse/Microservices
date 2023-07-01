import { NestFactory } from '@nestjs/core';
import { ModuleManagementModule } from './module-management.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function configureSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle('Avantys Education example')
    .setDescription('The Avantys Education API description')
    .setVersion('1.0')
    .addTag('Avantys Education')
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

async function bootstrap() {
  const app = await NestFactory.create(ModuleManagementModule);

  configureSwagger(app);

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}
bootstrap();