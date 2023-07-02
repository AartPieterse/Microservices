import { Body, Controller, Post} from '@nestjs/common';
import { CreatePotentialStudentCommand } from './commands/create-potentialStudent/create-potentialStudent.command';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { CreatePotentialStudentDto } from './potentialStudent/dto/create-potentialStudent.dto';

@Controller('student-management')
export class StudentManagementController {
  constructor(private readonly commandBus: CommandBus, private readonly eventBus: EventBus) {}

  @Post()
  async applyForStudy(@Body() data: CreatePotentialStudentDto) {
    const command = new CreatePotentialStudentCommand(data);
    const student = this.commandBus.execute(command);

    return student;
  }

  // @MessagePattern('meeting_notifications')
  // public async getMeetingResults(@Payload() data: any) {
  //   console.log('Message: ', data);
  // }
}
