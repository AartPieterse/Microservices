import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from '../constants/services';
import { PotentialStudentService } from './potentialStudent.service';
import { PotentialStudent, PotentialStudentSchema } from '../schemas/potentialStudent.schema';
import { PotentialStudentController } from './potentialStudent.controller';

@Module({
  imports: [RmqModule.register({name: APPLICATION_SERVICE}), MongooseModule.forFeature([{ name: PotentialStudent.name, schema: PotentialStudentSchema}])],
  controllers: [PotentialStudentController],
  providers: [PotentialStudentService]
})
export class PotentialStudentModule {}
