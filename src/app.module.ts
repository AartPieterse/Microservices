import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuidanceTeacherService } from './guidance-teacher/service/guidance-teacher.service';
import { ControllerController } from './guidance-teacher/controller/controller.controller';

@Module({
  imports: [],
  controllers: [AppController, ControllerController],
  providers: [AppService, GuidanceTeacherService],
})
export class AppModule {}
