import { Module } from '@nestjs/common';
import { StudentManagementController } from './student-management.controller';
import { StudentManagementService } from './student-management.service';
import { DatabaseModule, RmqModule } from '@app/common';
import { APPLICATION_SERVICE } from './constants/services';
import { MongooseModule } from '@nestjs/mongoose';
import { PotentialStudent, PotentialStudentSchema} from './schemas/potentialStudent.schema';
import { StudentManagementRepository } from './student-management.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env'
  }), RmqModule.register({name: APPLICATION_SERVICE}), DatabaseModule, MongooseModule.forFeature([{name: PotentialStudent.name, schema: PotentialStudentSchema}])],
  controllers: [StudentManagementController],
  providers: [StudentManagementService, StudentManagementRepository],
})
export class StudentManagementModule {}
