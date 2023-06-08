import { Module } from '@nestjs/common';
import { StudyProgramController } from './study-program.controller';
import { StudyProgramService } from './study-program.service';
import { ClassModule } from './class/class.module';
import { ModuleController } from './module/module.controller';
import { ModuleService } from './module/module.service';
import { ModuleModule } from './module/module.module';
import { LectureModule } from './lecture/lecture.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [ClassModule, ModuleModule, LectureModule, PaymentModule],
  controllers: [StudyProgramController, ModuleController, PaymentController],
  providers: [StudyProgramService, ModuleService],
})
export class StudyProgramModule {}
