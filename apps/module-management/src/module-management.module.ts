import { Module } from '@nestjs/common';
import { ModuleManagementController } from './module-management.controller';
import { ModuleManagementService } from './module-management.service';
import { DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/service';
import { MongooseModule } from '@nestjs/mongoose';
import { PotentialTest, PotentialTestSchema} from './schemas/potentialTest.schema';
import { ModuleManagementRepository } from './module-management.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }), RmqModule.register({name: APPLICATION_SERVICE}), DatabaseModule, MongooseModule.forFeature([{name: PotentialTest.name, schema: PotentialTestSchema}])],
  controllers: [ModuleManagementController],
  providers: [ModuleManagementService, ModuleManagementRepository],
})
export class ModuleManagementModule {}
