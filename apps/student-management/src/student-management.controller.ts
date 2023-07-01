import { Body, Controller, Post} from '@nestjs/common';
import { StudentManagementService } from './student-management.service';
import { CreatePotentialStudentCommand } from './commands/create-potentialStudent/create-potentialStudent.command';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { createPotentialStudentDto } from './dto/create-potentialStudent.dto';

@Controller('student-management')
export class StudentManagementController {
  constructor(private readonly studentManagementService: StudentManagementService, private readonly commandBus: CommandBus, private readonly eventBus: EventBus) {}

  @Post()
  async applyForStudy(@Body() data: createPotentialStudentDto) {
    const command = new CreatePotentialStudentCommand(data);
    const student = this.commandBus.execute(command);

    return student;
  }
}
