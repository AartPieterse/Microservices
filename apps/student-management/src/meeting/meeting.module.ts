import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingController } from './meeting.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { APPLICATION_SERVICE } from '../constants/services';
import { RmqModule } from '@app/common';
import { Meeting, MeetingSchema } from '../schemas/meeting.schema';
import { MeetingRepository } from './meeting.repository';

@Module({
  imports: [RmqModule.register({name: APPLICATION_SERVICE}), MongooseModule.forFeature([{ name: Meeting.name, schema: MeetingSchema}])],
  controllers: [MeetingController],
  providers: [MeetingService, MeetingRepository]
})
export class MeetingModule {}
