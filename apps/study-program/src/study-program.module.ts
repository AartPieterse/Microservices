import { Module } from '@nestjs/common';
import { StudyProgramController } from './study-program.controller';
import { StudyProgramService } from './study-program.service';

@Module({
  imports: [],
  controllers: [StudyProgramController],
  providers: [StudyProgramService],
})
export class StudyProgramModule {}
