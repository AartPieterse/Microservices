import { Body, Controller, Get, Post} from '@nestjs/common';
import { StudentManagementService } from './student-management.service';
import { applyStudyDto } from './dto/applyStudy.dto';

@Controller('applications')
export class StudentManagementController {
  constructor(private readonly studentManagementService: StudentManagementService) {}

  @Post()
  async applyForStudy(@Body() data: applyStudyDto) {
    const application = await this.studentManagementService.applyForStudy(data);

    return { status: 200, message: 'Confirmation message sent', data: application};
  }

  @Get()
  async getApplications(){
    return this.studentManagementService.getApplications();
  }
}
