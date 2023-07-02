import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from '../constants/services';
import { PotentialStudentService } from './potentialStudent.service';
import { PotentialStudent, PotentialStudentSchema } from '../schemas/potentialStudent.schema';
import { PotentialStudentController } from './potentialStudent.controller';

/**
 * Module class for the potential student module.
 */
@Module({
  imports: [
    // Register RabbitMQ module with the given service name
    RmqModule.register({ name: APPLICATION_SERVICE }),

    // Register the PotentialStudent model as a Mongoose feature
    MongooseModule.forFeature([{ name: PotentialStudent.name, schema: PotentialStudentSchema }])
  ],
  controllers: [PotentialStudentController],
  providers: [PotentialStudentService]
})
export class PotentialStudentModule {}
