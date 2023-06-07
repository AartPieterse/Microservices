import { Controller, Get } from '@nestjs/common';
import { GuidanceProgramService } from './guidance-program.service';

@Controller()
export class GuidanceProgramController {
  constructor(private readonly guidanceProgramService: GuidanceProgramService) {}

  @Get()
  getHello(): string {
    return this.guidanceProgramService.getHello();
  }
}
