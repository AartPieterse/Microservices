import { Controller, Get } from '@nestjs/common';
import { StudentManagementService } from './student-management.service';
import { EventPattern, Payload, Ctx, RmqContext} from '@nestjs/microservices'
@Controller()
export class StudentManagementController {
  constructor(private readonly studentManagementService: StudentManagementService) {}

  @Get()
  getHello(): string {
    return this.studentManagementService.getHello();
  }

  @EventPattern('study_created')
  async handlerStudyCreated(@Payload() data: any, @Ctx() context: RmqContext ) {
    this.studentManagementService.student(data)
  }
}
