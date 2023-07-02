// Import necessary modules and classes
import { NestFactory } from '@nestjs/core';
import { StudentManagementModule } from './student-management.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { APPLICATION_SERVICE } from './constants/services';

/**
 * @function configureSwagger
 * @param {object} app - The Nest application instance.
 * @description Configures Swagger documentation for the application.
 * It creates a new DocumentBuilder and sets up Swagger UI using SwaggerModule.
 */
function configureSwagger(app) {
  // Create a new DocumentBuilder and configure it
  const config = new DocumentBuilder()
    .setTitle('Avantys Education example')
    .setDescription('The Avantys Education API description')
    .setVersion('1.0')
    .addTag('Avantys Education')
    .build();

  // Create the Swagger document
  const document = SwaggerModule.createDocument(app, config);

  // Setup the Swagger UI
  SwaggerModule.setup('api', app, document);
}

/**
 * @function bootstrap
 * @async
 * @description Bootstrap function to start the application.
 * It creates the Nest application instance, configures Swagger documentation,
 * connects to the RabbitMQ microservice, starts all microservices, and starts listening on the specified port.
 */
async function bootstrap() {
  // Create the Nest application instance
  const app = await NestFactory.create(StudentManagementModule);

  // Configure Swagger documentation
  configureSwagger(app);

  // Get the ConfigService instance
  const configService = app.get(ConfigService);

  // Connect to the RabbitMQ microservice
  await app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [configService.get<string>('RABBIT_MQ_URI')],
      queue: configService.get<string>(`RABBIT_MQ_${APPLICATION_SERVICE}_QUEUE`),
      queueOptions: {
        durable: true,
      },
    },
  });

  // Start all microservices
  app.startAllMicroservices();

  // Start listening on the specified port
  await app.listen(configService.get('PORT'));
}

// Call the bootstrap function to start the application
bootstrap();
