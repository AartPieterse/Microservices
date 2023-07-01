import { Controller, Get } from '@nestjs/common';
import { TestProgramService } from './class-management.service';

@Controller('class-management')
export class TestProgramController {
  constructor(private readonly testProgramService: TestProgramService) {}

  @Get()
  getHello(): string {
    return this.testProgramService.getHello();
  }
}
