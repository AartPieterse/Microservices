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


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }), RmqModule.register({name: APPLICATION_SERVICE}), DatabaseModule, CqrsModule, MongooseModule.forFeature([{name: PotentialClass.name, schema: PotentialClassSchema}])],
  controllers: [ClassManagementController],
  providers: [ClassManagementService, ClassManagementRepository, PotentialClassRegisteredEvent, CreatePotentialClassCommand],
})
export class ClassManagementModule {}