import { NestFactory } from '@nestjs/core';
import { ModuleManagementModule } from './module-management.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Configures Swagger for API documentation.
 * @param app The Nest application instance.
 */
function configureSwagger(app) {
  const config = new DocumentBuilder()
    .setTitle('Avantys Education Example')
    .setDescription('The Avantys Education API description')
    .setVersion('1.0')
    .addTag('Avantys Education')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(ModuleManagementModule);

  // Configure Swagger for API documentation
  configureSwagger(app);

  const configService = app.get(ConfigService);

  // Start the application and listen on the configured port
  await app.listen(configService.get('PORT'));
}

bootstrap();
