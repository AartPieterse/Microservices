import { Module } from '@nestjs/common';
import { StudyController } from './study.controller';
import { StudyService } from './study.service';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { MongooseModule } from "@nestjs/mongoose"; 
import { DatabaseModule, RmqModule } from '@app/common';
import { StudyRepository } from './study.repository';
import { Study, StudySchema } from './schemas/study.schema';
import { STUDENT_MANAGEMENT_SERVICE } from '../constants/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/study/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{name: Study.name, schema: StudySchema }]),
    RmqModule.register({
      name: STUDENT_MANAGEMENT_SERVICE,
    })
  ],
  controllers: [StudyController],
  providers: [StudyService, StudyRepository],

})
export class StudyModule {}
