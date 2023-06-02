import { Controller, Get } from '@nestjs/common';
import { TestProgramService } from './test-program.service';

@Controller()
export class TestProgramController {
  constructor(private readonly testProgramService: TestProgramService) {}

  @Get()
  getHello(): string {
    return this.testProgramService.getHello();
  }
}
