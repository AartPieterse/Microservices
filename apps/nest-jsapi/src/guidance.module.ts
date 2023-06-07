import { Module } from '@nestjs/common';
import { GuidanceController } from './guidance.controller';
import { GuidanceService } from './guidance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { GuidanceRepository } from './guidance.repository';
import { Meeting, MeetingSchema } from './schemas/meeting.schema';
import { GUIDANCE_SERVICE } from './constants/services';
import { DatabaseModule } from './database/database.module';
import { RmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    RmqModule.register({ name: GUIDANCE_SERVICE }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema }]),
  ],
  controllers: [GuidanceController],
  providers: [GuidanceService, GuidanceRepository],
})
export class GuidanceModule {}
