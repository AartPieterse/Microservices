import { Controller, Get } from '@nestjs/common';
import { StudyProgramService } from './study-program.service';

@Controller('study-program')
export class StudyProgramController {
  constructor(private readonly studyProgramService: StudyProgramService) {}

  @Get()
  getHello(): string {
    return this.studyProgramService.getHello();
  }
}
