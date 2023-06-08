import { Body, Controller, Get, Post} from '@nestjs/common';
import { ModuleManagementService } from './module-management.service';
import { applyTestDto } from './dto/applyTest.dto';

@Controller('applications')
export class ModuleManagementController {
  constructor(private readonly moduleManagementService: ModuleManagementService) {}

  @Post()
  async applyForTest(@Body() data: applyTestDto) {
    const application = await this.moduleManagementService.applyForTest(data);

    return { status: 200, message: 'Confirmation message sent', data: application};
  }

  @Get()
  async getApplications(){
    return this.moduleManagementService.getApplications();
  }
}
