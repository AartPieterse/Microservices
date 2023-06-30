import { Module } from '@nestjs/common';
import { StudentManagementController } from './student-management.controller';
import { StudentManagementService } from './student-management.service';
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      RABBIT_MQ_URI: Joi.string().required(),
      RABBIT_MQ_STUDENT_MANAGEMENT_QUEUE: Joi.string().required() 
    })
  }),
  RmqModule
 ],
  controllers: [StudentManagementController],
  providers: [StudentManagementService],
})
export class StudentManagementModule {}
