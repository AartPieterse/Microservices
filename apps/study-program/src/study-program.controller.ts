import { Controller, Get } from '@nestjs/common';
import { StudyProgramService } from './study-program.service';

@Controller()
export class StudyProgramController {
  constructor(private readonly studyProgramService: StudyProgramService) {}

  @Get('getHello')
  getHello(): string {
    return this.studyProgramService.getHello();
  }

  @Get('getGoodbye')
  getGoodbye(): string {
    return this.studyProgramService.getGoodbye();
  }
}
