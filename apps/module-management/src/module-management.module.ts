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


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }), RmqModule.register({name: APPLICATION_SERVICE}), DatabaseModule, CqrsModule, MongooseModule.forFeature([{name: PotentialModule.name, schema: PotentialModuleSchema}])],
  controllers: [ModuleManagementController],
  providers: [ModuleManagementService, ModuleManagementRepository, PotentialModuleRegisteredEvent, CreatePotentialModuleCommand],
})
export class ModuleManagementModule {}