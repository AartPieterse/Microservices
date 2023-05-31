import { Body, Controller, Get, Post} from '@nestjs/common';
import { StudentManagementService } from './student-management.service';
import { applyStudyDto } from './dto/applyStudy.dto';
import { CreatePotentialStudentCommand } from './commands/create-potentialStudent/create-potentialStudent.command';
import { CommandBus, EventBus } from '@nestjs/cqrs';

@Controller('applications')
export class StudentManagementController {
  constructor(private readonly studentManagementService: StudentManagementService, private readonly commandBus: CommandBus, private readonly eventBus: EventBus) {}

  @Post()
  async applyForStudy(@Body() data: applyStudyDto) {
    const command = new CreatePotentialStudentCommand(data.name, data.study, data.phoneNumber, data.email);
    this.commandBus.execute(command);
  }

  @Get()
  async getApplications(){
    return this.studentManagementService.getApplications();
  }
}
