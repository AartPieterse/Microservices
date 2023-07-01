import { Module } from '@nestjs/common';
import { DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { PotentialModule, PotentialModuleSchema } from './schemas/potentialModule.schema';
import { ModuleManagementService } from './module-management.service';
import { ModuleManagementController } from './module-management.controller';
import { ModuleManagementRepository } from './module-management.repository';
import { PotentialModuleRegisteredEvent } from './events/potentialModule-registered.event';
import { CreatePotentialModuleCommand } from './commands/create-potentialModule.command';

/**
 * Nest module for managing the module management feature.
 * Responsible for importing dependencies, configuring providers, and controllers.
 */
@Module({
  imports: [
    // Import configuration module
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),

    // Import RabbitMQ module
    RmqModule.register({ name: APPLICATION_SERVICE }),

    // Import database module
    DatabaseModule,

    // Import CQRS module
    CqrsModule,

    // Import Mongoose module and register potential module schema
    MongooseModule.forFeature([{ name: PotentialModule.name, schema: PotentialModuleSchema }])
  ],
  controllers: [ModuleManagementController],
  providers: [
    // Configure module management service and repository
    ModuleManagementService,
    ModuleManagementRepository,

    // Configure event and command handlers
    PotentialModuleRegisteredEvent,
    CreatePotentialModuleCommand
  ],
})
export class ModuleManagementModule {}
