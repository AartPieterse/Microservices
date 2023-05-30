import { Controller, Get } from '@nestjs/common';
import { StudentManagementService } from './student-management.service';

@Controller()
export class StudentManagementController {
  constructor(private readonly studentManagementService: StudentManagementService) {}

  @Get()
  getHello(): string {
    return this.studentManagementService.getHello();
  }
}
