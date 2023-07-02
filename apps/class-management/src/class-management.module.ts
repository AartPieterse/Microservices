import { Module } from '@nestjs/common';
import { DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/services';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { PotentialClass, PotentialClassSchema } from './schemas/potentialClass.schema';
import { ClassManagementController } from './class-management.controller';
import { ClassManagementService } from './class-management.service';
import { ClassManagementRepository } from './class-management.repository';
import { CreatePotentialClassCommand } from './commands/create-potentialClass.command';
import { PotentialClassRegisteredEvent } from './event/potentialClass-registered.event';

/**
 * Module for managing potential classes.
 */
@Module({
  imports: [
    // Load configuration from .env file
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/class-management/.env'
    }),

    // Register RabbitMQ module with the given service name
    RmqModule.register({ name: APPLICATION_SERVICE }),

    // Import the DatabaseModule for database connection
    DatabaseModule,

    // Import the CqrsModule for Command/Event handling
    CqrsModule,

    // Register the PotentialClass model as a Mongoose feature
    MongooseModule.forFeature([{ name: PotentialClass.name, schema: PotentialClassSchema }])
  ],
  controllers: [ClassManagementController],
  providers: [
    // Provide the ClassManagementService to handle business logic
    ClassManagementService,

    // Provide the ClassManagementRepository to interact with the database
    ClassManagementRepository,

    // Provide the PotentialClassRegisteredEvent for event handling
    PotentialClassRegisteredEvent,

    // Provide the CreatePotentialClassCommand for command handling
    CreatePotentialClassCommand,
  ],
})
export class ClassManagementModule {}
