
// import { NestFactory } from '@nestjs/core';
// import { TestProgramModule } from './test-program.module';
// import { ConfigService } from '@nestjs/config';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { APPLICATION_SERVICE } from './constants/services';

// function configureSwagger(app) {
//   const config = new DocumentBuilder()
//     .setTitle('Avantys Education example')
//     .setDescription('The Avantys Education API description')
//     .setVersion('1.0')
//     .addTag('Avantys Education')
//     .build();

//   const document = SwaggerModule.createDocument(app, config);
//   SwaggerModule.setup('api', app, document);
// }

// async function bootstrap() {
//   const app = await NestFactory.create(TestProgramModule);

//   configureSwagger(app);

//   const configService = app.get(ConfigService);

//   await app.connectMicroservice<MicroserviceOptions>({
//     transport: Transport.RMQ,
//     options: {
//       urls: [configService.get<string>('RABBIT_MQ_URI')],
//       queue: configService.get<string>(`RABBIT_MQ_${APPLICATION_SERVICE}_QUEUE`),
//       queueOptions: {
//         durable: true,
//       },
//     },
//   });

//   app.startAllMicroservices();

//   await app.listen(configService.get('PORT'));
// }

// bootstrap();

import { NestFactory } from '@nestjs/core';
import { TestProgramModule } from './test-program.module';
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
  const app = await NestFactory.create(TestProgramModule);

  configureSwagger(app);

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT'));
}
bootstrap();