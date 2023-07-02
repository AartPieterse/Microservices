import { NestFactory } from '@nestjs/core';
import { TestModule } from './test.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Configures Swagger documentation for the application.
 * @param app The Nest.js application instance.
 */
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

/**
 * Bootstrap function to start the Nest.js application.
 */
async function bootstrap() {
  const app = await NestFactory.create(TestModule);

  configureSwagger(app);

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}

bootstrap();